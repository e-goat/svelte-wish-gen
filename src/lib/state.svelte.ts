interface CardState {
    title: string;
    sender: string;
    receiver: string;
    description: string;
    templateId: number;
    slug: string;
    audioUrl: string | null;
    cardUuid: string;
}

interface StepperState {
    initialStep: number;
    currentStep: number;
    finalStep: number;
    steps: number;
    isSubmitting: boolean;
    isRendering: boolean;
}

interface RecorderState {
    blob: Blob | null;
}

interface TemplateColorCache {
    colors: Map<number, string>;
}

export const cs: CardState = $state({
    title: "",
    sender: "",
    receiver: "",
    description: "",
    templateId: 0,
    slug: "",
    audioUrl: null,
    cardUuid: "",
});

export const ss: StepperState = $state({
    initialStep: 0,
    currentStep: 0,
    finalStep: 0,
    steps: 0,
    isSubmitting: false,
    isRendering: false,
});

export const rs: RecorderState = $state({
    blob: null,
});

export const tcc: TemplateColorCache = $state({
    colors: new Map(),
});

export function resetCardState() {
    cs.title = "";
    cs.sender = "";
    cs.receiver = "";
    cs.description = "";
    cs.templateId = 0;
    cs.slug = "";
    cs.audioUrl = null;
    cs.cardUuid = "";

    ss.currentStep = 1;
    ss.isSubmitting = false;

    rs.blob = null;
}
