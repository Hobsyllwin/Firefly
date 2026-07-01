<script lang="ts">
import QRCode from "qrcode";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@/components/common/Icon.svelte";

let content = "";
let qrDataUrl = "";
let generating = false;

let debounceTimer: ReturnType<typeof setTimeout>;

const generate = async (text: string) => {
	if (!text.trim()) {
		qrDataUrl = "";
		return;
	}
	generating = true;
	try {
		qrDataUrl = await QRCode.toDataURL(text, {
			margin: 1,
			width: 240,
			color: { dark: "#000000", light: "#ffffff" },
		});
	} catch (error) {
		console.error("QR code generation failed:", error);
		qrDataUrl = "";
	} finally {
		generating = false;
	}
};

const handleInput = () => {
	clearTimeout(debounceTimer);
	debounceTimer = setTimeout(() => generate(content), 250);
};

const download = () => {
	if (!qrDataUrl) return;
	const a = document.createElement("a");
	a.href = qrDataUrl;
	a.download = "qrcode.png";
	a.click();
};
</script>

<div class="card-base px-6 py-6 md:px-9 md:py-6 rounded-(--radius-large) h-full">
    <div class="mb-4">
        <div class="flex items-center gap-3 mb-3">
            <div class="h-8 w-8 rounded-lg bg-(--primary) flex items-center justify-center text-white dark:text-black/70">
                <Icon icon="material-symbols:qr-code-2-rounded" class="text-[1.5rem]"></Icon>
            </div>
            <div class="text-2xl font-bold text-90">
                {i18n(I18nKey.toolsQrCode)}
            </div>
        </div>
        <p class="text-sm text-50">
            {i18n(I18nKey.toolsQrCodeDescription)}
        </p>
    </div>

    <textarea
        class="block w-full p-3 text-sm bg-transparent border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-(--primary) hover:border-black/20 dark:hover:border-white/20 text-75 placeholder:opacity-50 transition-colors outline-hidden resize-none"
        rows="3"
        placeholder={i18n(I18nKey.toolsQrCodePlaceholder)}
        bind:value={content}
        oninput={handleInput}
    ></textarea>

    <div class="flex flex-col items-center justify-center mt-4 py-6 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] min-h-[280px]">
        {#if generating}
            <Icon icon="svg-spinners:ring-resize" class="text-4xl text-(--primary)" />
        {:else if qrDataUrl}
            <img src={qrDataUrl} alt="QR Code" class="w-[240px] h-[240px] rounded-lg bg-white p-2" />
            <button
                type="button"
                class="btn-regular rounded-lg h-10 px-5 gap-2 mt-4 text-sm hover:scale-105 active:scale-95"
                onclick={download}
            >
                <Icon icon="material-symbols:download-rounded" />
                {i18n(I18nKey.toolsQrCodeDownload)}
            </button>
        {:else}
            <p class="text-sm text-50 text-center px-4">
                {i18n(I18nKey.toolsQrCodeEmpty)}
            </p>
        {/if}
    </div>
</div>
