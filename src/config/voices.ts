export const OPTIC_KEYS = [
  'chekhov',
  'dostoevsky',
  'tolstoy',
  'pushkin',
  'pelevin',
  'ilf_petrov',
  'business',
] as const;

export type OpticKey = (typeof OPTIC_KEYS)[number];

export type OpticVoice = {
  label: string;
  voiceId: string;
  style: string;
  elevenLabs?: {
    modelId: 'eleven_multilingual_v2' | string;
    stability: number;
    similarityBoost: number;
    style: number;
    useSpeakerBoost: boolean;
  };
};

export const OPTIC_VOICES: Record<OpticKey, OpticVoice> = {
  chekhov: {
    label: 'Чехов',
    voiceId: 'TBD',
    style: 'сдержанный, наблюдательный, лёгкая пауза перед иронией',
    elevenLabs: {
      modelId: 'eleven_multilingual_v2',
      stability: 0.66,
      similarityBoost: 0.78,
      style: 0.18,
      useSpeakerBoost: true,
    },
  },
  dostoevsky: {
    label: 'Достоевский',
    voiceId: 'TBD',
    style: 'нервный, надрывный, с ускорениями на моральных всплесках',
    elevenLabs: {
      modelId: 'eleven_multilingual_v2',
      stability: 0.38,
      similarityBoost: 0.82,
      style: 0.58,
      useSpeakerBoost: true,
    },
  },
  tolstoy: {
    label: 'Толстой',
    voiceId: 'TBD',
    style: 'неторопливый, весомый, размеренный',
    elevenLabs: {
      modelId: 'eleven_multilingual_v2',
      stability: 0.78,
      similarityBoost: 0.76,
      style: 0.12,
      useSpeakerBoost: true,
    },
  },
  pushkin: {
    label: 'Пушкин',
    voiceId: 'TBD',
    style: 'напевный, ритмичный, пригодный для мини-поэм',
    elevenLabs: {
      modelId: 'eleven_multilingual_v2',
      stability: 0.55,
      similarityBoost: 0.76,
      style: 0.42,
      useSpeakerBoost: true,
    },
  },
  pelevin: {
    label: 'Пелевин',
    voiceId: 'TBD',
    style: 'отстранённо-ироничный, монотонный с внезапными акцентами',
    elevenLabs: {
      modelId: 'eleven_multilingual_v2',
      stability: 0.62,
      similarityBoost: 0.74,
      style: 0.32,
      useSpeakerBoost: true,
    },
  },
  ilf_petrov: {
    label: 'Ильф и Петров',
    voiceId: 'TBD',
    style: 'быстрый, лукавый, с поддёвкой',
    elevenLabs: {
      modelId: 'eleven_multilingual_v2',
      stability: 0.45,
      similarityBoost: 0.78,
      style: 0.62,
      useSpeakerBoost: true,
    },
  },
  business: {
    label: 'Деловая публицистика',
    voiceId: 'TBD',
    style: 'нейтральный дикторский, деловой',
    elevenLabs: {
      modelId: 'eleven_multilingual_v2',
      stability: 0.72,
      similarityBoost: 0.76,
      style: 0.08,
      useSpeakerBoost: true,
    },
  },
};

export function getOpticVoice(optic: OpticKey): OpticVoice {
  return OPTIC_VOICES[optic];
}
