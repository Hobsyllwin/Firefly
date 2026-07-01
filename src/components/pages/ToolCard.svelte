<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@/components/common/Icon.svelte";

export let icon: string;
export let title: string;
export let description = "";
export let defaultExpanded = true;

let expanded = defaultExpanded;
</script>

<div class="card-base rounded-(--radius-large) h-fit">
    <button
        type="button"
        class="w-full flex items-center gap-3 px-6 py-6 md:px-9 md:py-6 text-left"
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
        <Icon
            icon="material-symbols:keyboard-arrow-down-rounded"
            class="text-2xl text-50 shrink-0 transition-transform duration-300"
            style={expanded ? "transform: rotate(180deg);" : ""}
        />
    </button>
    {#if expanded}
        <div class="px-6 pb-6 md:px-9 md:pb-6">
            <slot />
        </div>
    {/if}
</div>
