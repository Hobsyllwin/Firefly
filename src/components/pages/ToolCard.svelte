<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@/components/common/Icon.svelte";

export let icon: string;
export let title: string;
export let description = "";
export let defaultExpanded = false;

let expanded = defaultExpanded;
</script>

<div class="card-base rounded-(--radius-large) h-fit overflow-hidden">
    <button
        type="button"
        class="tool-header w-full flex items-center gap-3 px-6 py-6 md:px-9 md:py-6 text-left"
        onclick={() => (expanded = !expanded)}
        aria-expanded={expanded}
        title={expanded ? i18n(I18nKey.collapse) : i18n(I18nKey.more)}
    >
        <div class="h-8 w-8 rounded-lg bg-(--primary) flex items-center justify-center text-white dark:text-black/70 shrink-0">
            <Icon {icon} class="text-[1.5rem]"></Icon>
        </div>
        <div class="flex-1 min-w-0">
            <div class="text-2xl font-bold text-90">{title}</div>
            {#if description}
                <p class="text-sm text-50 mt-1">{description}</p>
            {/if}
        </div>
        {#if expanded}
            <Icon
                icon="material-symbols:radio-button-checked"
                class="text-50 shrink-0 opacity-60"
                style="font-size: 1rem;"
            />
        {:else}
            <Icon
                icon="material-symbols:radio-button-unchecked"
                class="text-50 shrink-0 opacity-60"
                style="font-size: 1rem;"
            />
        {/if}
    </button>
    {#if expanded}
        <div class="px-6 pb-6 md:px-9 md:pb-6">
            <slot />
        </div>
    {/if}
</div>

<style>
    .tool-header {
        position: relative;
        overflow: hidden;
        transition:
            background 0.25s ease,
            box-shadow 0.25s ease;
    }

    .tool-header::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            120deg,
            transparent 35%,
            color-mix(in srgb, var(--primary) 22%, transparent) 50%,
            transparent 65%
        );
        transform: translateX(-140%);
        pointer-events: none;
    }

    .tool-header:hover {
        background: color-mix(in srgb, var(--primary) 8%, transparent);
        box-shadow: inset 0 0 20px color-mix(in srgb, var(--primary) 20%, transparent);
    }

    .tool-header:hover::before {
        transform: translateX(140%);
        transition: transform 0.6s ease;
    }
</style>
