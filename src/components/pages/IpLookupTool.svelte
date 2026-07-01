<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { onMount } from "svelte";
import Icon from "@/components/common/Icon.svelte";

interface IpInfo {
	ip: string;
	success: boolean;
	message?: string;
	country?: string;
	region?: string;
	city?: string;
	flag?: { emoji?: string };
	connection?: { isp?: string; org?: string };
	timezone?: { id?: string };
}

let ipInput = "";
let info: IpInfo | null = null;
let loading = false;
let errorMsg = "";

const query = async (target: string) => {
	loading = true;
	errorMsg = "";
	info = null;
	try {
		const res = await fetch(`https://ipwho.is/${encodeURIComponent(target.trim())}`);
		const data: IpInfo = await res.json();
		if (!data.success) {
			throw new Error(data.message || "lookup failed");
		}
		info = data;
	} catch (error) {
		console.error("IP lookup failed:", error);
		errorMsg = i18n(I18nKey.toolsIpLookupError);
	} finally {
		loading = false;
	}
};

onMount(() => {
	query("");
});
</script>

<div class="card-base px-6 py-6 md:px-9 md:py-6 rounded-(--radius-large) h-full">
    <div class="mb-4">
        <div class="flex items-center gap-3 mb-3">
            <div class="h-8 w-8 rounded-lg bg-(--primary) flex items-center justify-center text-white dark:text-black/70">
                <Icon icon="material-symbols:travel-explore-rounded" class="text-[1.5rem]"></Icon>
            </div>
            <div class="text-2xl font-bold text-90">
                {i18n(I18nKey.toolsIpLookup)}
            </div>
        </div>
        <p class="text-sm text-50">
            {i18n(I18nKey.toolsIpLookupDescription)}
        </p>
    </div>

    <div class="flex gap-2">
        <input
            type="text"
            class="block flex-1 p-3 text-sm bg-transparent border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-(--primary) hover:border-black/20 dark:hover:border-white/20 text-75 placeholder:opacity-50 transition-colors outline-hidden"
            placeholder={i18n(I18nKey.toolsIpLookupPlaceholder)}
            bind:value={ipInput}
            onkeydown={(e) => e.key === "Enter" && query(ipInput)}
        >
        <button
            type="button"
            class="btn-regular rounded-lg h-auto px-4 text-sm shrink-0 hover:scale-105 active:scale-95"
            onclick={() => query(ipInput)}
        >
            {i18n(I18nKey.toolsIpLookupQuery)}
        </button>
    </div>
    <button
        type="button"
        class="text-xs text-(--primary) mt-2 hover:opacity-75 transition-opacity"
        onclick={() => { ipInput = ""; query(""); }}
    >
        {i18n(I18nKey.toolsIpLookupMyIp)}
    </button>

    <div class="mt-4 py-6 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] min-h-[200px] flex flex-col items-center justify-center">
        {#if loading}
            <Icon icon="svg-spinners:ring-resize" class="text-4xl text-(--primary)" />
        {:else if errorMsg}
            <p class="text-sm text-red-500 text-center px-4">{errorMsg}</p>
        {:else if info}
            <div class="w-full px-2 space-y-3">
                <div class="text-center mb-2">
                    <span class="text-2xl font-bold text-90">{info.ip}</span>
                    {#if info.flag?.emoji}<span class="text-2xl ml-2">{info.flag.emoji}</span>{/if}
                </div>
                <div class="flex justify-between text-sm border-t border-black/5 dark:border-white/5 pt-2">
                    <span class="text-50">{i18n(I18nKey.toolsIpLookupLocation)}</span>
                    <span class="text-75 text-right">{[info.country, info.region, info.city].filter(Boolean).join(" · ") || "-"}</span>
                </div>
                <div class="flex justify-between text-sm border-t border-black/5 dark:border-white/5 pt-2">
                    <span class="text-50">{i18n(I18nKey.toolsIpLookupIsp)}</span>
                    <span class="text-75 text-right">{info.connection?.isp || info.connection?.org || "-"}</span>
                </div>
                <div class="flex justify-between text-sm border-t border-black/5 dark:border-white/5 pt-2">
                    <span class="text-50">{i18n(I18nKey.toolsIpLookupTimezone)}</span>
                    <span class="text-75 text-right">{info.timezone?.id || "-"}</span>
                </div>
            </div>
        {/if}
    </div>
</div>
