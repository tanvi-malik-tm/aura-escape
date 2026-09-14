'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Check, ChevronLeft, ChevronRight, Copy, LocateFixed, RefreshCw, Send, Share2, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { chooseEscape, type Escape, type EscapeSize } from '@/lib/catalogue';

type Mood = { name: string; colors: [string, string, string] };
type Refinement = { label: string; wants?: string[]; budgetMultiplier?: number; size?: EscapeSize };

const moods: Mood[] = [
  { name: 'Drained', colors: ['#dce7ed', '#91a8b8', '#52677a'] },
  { name: 'Stressed', colors: ['#eba4e9', '#d85ecf', '#7e51ce'] },
  { name: 'Restless', colors: ['#a8f1a4', '#42d7c6', '#39cfea'] },
  { name: 'Bored', colors: ['#ffd95a', '#c8ee6a', '#8be7a6'] },
  { name: 'Lonely', colors: ['#899bf2', '#5964d6', '#9a82dd'] },
  { name: 'Low & heavy', colors: ['#a9c5e6', '#7189bd', '#4f5f96'] },
  { name: 'Overwhelmed', colors: ['#f2c4ce', '#ca7898', '#84567c'] },
  { name: 'Disconnected', colors: ['#b9c1ed', '#7c85c8', '#55589d'] },
  { name: 'Homesick', colors: ['#ffd7a3', '#dc9271', '#9f5f68'] },
  { name: 'Cabin fever', colors: ['#c0f1c4', '#61cba2', '#2e9e9c'] },
  { name: 'Anxious', colors: ['#e9b9dd', '#b879ca', '#6766ad'] },
  { name: 'Frustrated', colors: ['#ffb49f', '#ee756d', '#b44767'] },
  { name: 'Uninspired', colors: ['#c8cfca', '#87968e', '#566b68'] },
  { name: 'Reflective', colors: ['#cad6eb', '#7d9dc5', '#536d9b'] },
  { name: 'Curious', colors: ['#fff0a6', '#ffc950', '#ff8b5c'] },
  { name: 'Celebratory', colors: ['#ffd2a6', '#ff8d73', '#ea526f'] },
  { name: 'Hopeful', colors: ['#fff2a8', '#bde879', '#64cf9b'] },
  { name: 'Content', colors: ['#dcf5c8', '#8ed6a7', '#59a9a0'] },
  { name: 'Energised', colors: ['#ffe36e', '#ff9b55', '#ef5f67'] },
  { name: 'Playful', colors: ['#ffc5ed', '#b881ed', '#6978e7'] },
  { name: 'Sociable', colors: ['#ffccb2', '#ff8175', '#d95698'] },
  { name: 'Adventurous', colors: ['#d7ef7f', '#52d6a3', '#20a9bb'] },
  { name: 'Inspired', colors: ['#fff0bd', '#ffb85c', '#db6bad'] },
  { name: 'Spontaneous', colors: ['#c2f2ff', '#5fcedf', '#7587ef'] },
  { name: 'Romantic', colors: ['#ffd1dc', '#ee8ba9', '#a55ea3'] },
  { name: 'Confident', colors: ['#ffe69a', '#ef9d4e', '#cc5f62'] },
];

const wants = ['Social energy', 'City buzz', 'A good drink', 'Feel on top of the world', 'Nightlife', 'Dance', 'Shopping', 'Wellness', 'Sports & movement', 'Romance', 'Nature', 'Good food', 'Culture', 'A surprise', 'Water views', 'Make something', 'Live music', 'Beautiful views', 'Hidden gems', 'Indoors', 'A little luxury', 'Gentle social energy'];
const essentialWants = ['A surprise', 'Social energy', 'City buzz', 'Good food', 'A good drink', 'Beautiful views', 'Wellness'];
const extraWants = wants.filter((want) => !essentialWants.includes(want));
const crisisTerms = ['kill myself', 'end my life', 'suicide', 'hurt myself', 'self harm', 'don’t want to live', "don't want to live", 'not worth living'];

type MoodTrack = { id: string; title: string; artist: string; src: string; vocal?: boolean };
type MoodSoundLayer = { trackId: string; audio: HTMLAudioElement; fadeTimer: number | null };

const tracks: Record<string, MoodTrack> = {
  serene: { id: 'serene', title: 'Serene View', artist: 'Arulo', src: '/audio/serene-view.mp3' },
  tender: { id: 'tender', title: 'Beautiful Dream', artist: 'Diego Nava', src: '/audio/beautiful-dream.mp3' },
  afterHours: { id: 'after-hours', title: 'Hazy After Hours', artist: 'Alejandro Magaña', src: '/audio/hazy-after-hours.mp3' },
  playful: { id: 'playful', title: 'Gimme that Groove!', artist: 'Michael Ramir C.', src: '/audio/gimme-that-groove.mp3' },
  confident: { id: 'confident', title: 'Driving Ambition', artist: 'Ahjay Stelino', src: '/audio/driving-ambition.mp3' },
  social: { id: 'social', title: 'Cat Walk', artist: 'Arulo', src: '/audio/cat-walk.mp3' },
  vocal: { id: 'vocal', title: 'Electric Dreams Beyond the Horizon', artist: 'MeditativeTiger', src: '/audio/electric-dreams-vocal.mp3', vocal: true },
};

const trackGroups: [Set<string>, MoodTrack][] = [
  [new Set(['Drained', 'Stressed', 'Overwhelmed', 'Anxious', 'Content']), tracks.serene],
  [new Set(['Lonely', 'Low & heavy', 'Disconnected', 'Homesick', 'Reflective']), tracks.tender],
  [new Set(['Restless', 'Frustrated']), tracks.afterHours],
  [new Set(['Bored', 'Cabin fever', 'Playful', 'Celebratory']), tracks.playful],
  [new Set(['Hopeful', 'Energised', 'Confident']), tracks.confident],
  [new Set(['Sociable', 'Spontaneous']), tracks.social],
  [new Set(['Curious', 'Uninspired', 'Inspired', 'Adventurous', 'Romantic']), tracks.vocal],
];

function trackForMood(moodName: string) {
  return trackGroups.find(([moodsInGroup]) => moodsInGroup.has(moodName))?.[1] ?? tracks.serene;
}

function rampMoodSound(layer: MoodSoundLayer, target: number, seconds: number, onDone?: () => void) {
  if (layer.fadeTimer !== null) window.clearInterval(layer.fadeTimer);
  const startVolume = layer.audio.volume;
  const startedAt = window.performance.now();
  const duration = Math.max(seconds * 1000, 1);
  layer.fadeTimer = window.setInterval(() => {
    const progress = Math.min((window.performance.now() - startedAt) / duration, 1);
    layer.audio.volume = Math.max(0, Math.min(1, startVolume + (target - startVolume) * progress));
    if (progress === 1) {
      if (layer.fadeTimer !== null) window.clearInterval(layer.fadeTimer);
      layer.fadeTimer = null;
      onDone?.();
    }
  }, 35);
}

function fadeOutMoodSound(layer: MoodSoundLayer | null, seconds = 0.75, onDone?: () => void) {
  if (!layer) return;
  rampMoodSound(layer, 0, seconds, () => {
    layer.audio.pause();
    layer.audio.currentTime = 0;
    onDone?.();
  });
}

function currencyFor(location: string) {
  const place = location.toLowerCase();
  if (place.includes('singapore')) return { symbol: 'S$', code: 'SGD' };
  if (place.includes('malaysia') || place.includes('kuala lumpur')) return { symbol: 'RM', code: 'MYR' };
  if (place.includes('indonesia') || place.includes('bali')) return { symbol: 'Rp', code: 'IDR' };
  if (place.includes('japan') || place.includes('tokyo')) return { symbol: '¥', code: 'JPY' };
  if (place.includes('korea') || place.includes('seoul')) return { symbol: '₩', code: 'KRW' };
  if (place.includes('uk') || place.includes('london')) return { symbol: '£', code: 'GBP' };
  if (place.includes('australia') || place.includes('sydney')) return { symbol: 'A$', code: 'AUD' };
  if (place.includes('europe') || place.includes('paris') || place.includes('lisbon')) return { symbol: '€', code: 'EUR' };
  return { symbol: '$', code: 'USD' };
}

const searchUrl = (query: string) => `https://www.google.com/search?q=${encodeURIComponent(query)}`;

function refinementsForMood(mood: string, size: EscapeSize, hasBudget: boolean): Refinement[] {
  const closer = size === 'global' ? { label: 'Keep it closer', size: 'weekend' as const } : size === 'weekend' ? { label: 'Keep it closer', size: 'day' as const } : null;
  const budgetCut = hasBudget ? { label: 'Reduce the budget', budgetMultiplier: .8 } : null;
  const gentler = ['Drained', 'Stressed', 'Low & heavy', 'Overwhelmed', 'Disconnected', 'Homesick', 'Anxious', 'Reflective'].includes(mood);
  const social = ['Lonely', 'Bored', 'Sociable', 'Celebratory', 'Playful', 'Spontaneous', 'Confident'].includes(mood);
  const restless = ['Restless', 'Cabin fever', 'Frustrated', 'Energised', 'Adventurous', 'Curious', 'Inspired'].includes(mood);
  if (gentler) return [
    { label: 'A softer indoor plan', wants: ['Indoors', 'Wellness'] },
    closer,
    budgetCut,
  ].filter(Boolean) as Refinement[];
  if (social) return [
    { label: 'Make it more social', wants: ['Social energy', 'Gentle social energy'] },
    { label: 'Make it more exciting', wants: ['Nightlife', 'Live music', 'A good drink'] },
    budgetCut,
  ].filter(Boolean) as Refinement[];
  if (restless) return [
    { label: 'Make it more exciting', wants: ['A surprise', 'Sports & movement', 'Live music'] },
    { label: 'Keep it indoors', wants: ['Indoors', 'Culture'] },
    closer ?? budgetCut,
  ].filter(Boolean) as Refinement[];
  return [
    { label: 'Make it more surprising', wants: ['A surprise', 'Hidden gems'] },
    { label: 'Make it more social', wants: ['Social energy', 'Good food'] },
    budgetCut,
  ].filter(Boolean) as Refinement[];
}

function stopEmoji(stop: Escape['stops'][number]) {
  if (stop.emoji) return stop.emoji;
  if (stop.kind === 'Restaurant') return '🍽️';
  if (stop.kind === 'Café') return '☕';
  if (stop.kind === 'Bar') return '🍸';
  if (/walk|trail|cycle|garden|boardwalk/i.test(`${stop.title} ${stop.detail}`)) return '🌿';
  if (/view|sky|rooftop|bridge|hill/i.test(`${stop.title} ${stop.detail}`)) return '🌆';
  if (/museum|gallery|art|craft/i.test(`${stop.title} ${stop.detail}`)) return '🎨';
  if (/music|dance|dj|live/i.test(`${stop.title} ${stop.detail}`)) return '🎶';
  return '✨';
}

function itineraryText(plan: Escape, mood: string, budget: string) {
  const stops = plan.stops.map((stop) => `${stopEmoji(stop)} ${stop.time} — ${stop.title}\n${stop.detail}`).join('\n\n');
  return `My Aura escape: ${plan.title}\n${plan.destination} · ${plan.duration} · about ${budget}\n\nWhy it fits my ${mood.toLowerCase()} mood: ${plan.why}\n\n${stops}\n\nMade with Aura`;
}

export default function Home() {
  const [step, setStep] = useState(0);
  const [moodIndex, setMoodIndex] = useState(2);
  const [story, setStory] = useState('');
  const [fastPath, setFastPath] = useState(false);
  const [size, setSize] = useState<EscapeSize>('day');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Singapore');
  const [budget, setBudget] = useState('');
  const [distance, setDistance] = useState('');
  const [companions, setCompanions] = useState('Solo');
  const [selectedWants, setSelectedWants] = useState<string[]>([]);
  const [showMoreWants, setShowMoreWants] = useState(false);
  const [avoid, setAvoid] = useState('');
  const [result, setResult] = useState<Escape | null>(null);
  const [shuffle, setShuffle] = useState(0);
  const [toast, setToast] = useState('');
  const [weatherNote, setWeatherNote] = useState('');
  const [crisis, setCrisis] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [audioReady, setAudioReady] = useState(false);
  const soundLayerRef = useRef<MoodSoundLayer | null>(null);
  const soundEnabledRef = useRef(soundEnabled);
  const soundSessionRef = useRef(0);
  const mood = moods[moodIndex];
  const currentTrack = trackForMood(mood.name);
  const currency = currencyFor(location);
  const progress = result ? 4 : fastPath ? Math.min(step, 2) : step;
  const distanceOptions = useMemo(() => size === 'day' ? ['Keep it close', 'Across the city', 'Surprise me'] : size === 'weekend' ? ['A short hop', 'A short flight', 'Road-trip radius'] : ['Within Asia', 'Up to 8 hours', 'Anywhere'], [size]);

  const nudgeMood = (direction: number) => setMoodIndex((current) => (current + direction + moods.length) % moods.length);

  async function unlockAudio(force = false) {
    if (!soundEnabledRef.current && !force) return;
    try {
      let layer = soundLayerRef.current;
      if (!layer) {
        const audio = new Audio(currentTrack.src);
        audio.loop = true;
        audio.preload = 'auto';
        audio.volume = 0;
        await audio.play();
        layer = { trackId: currentTrack.id, audio, fadeTimer: null };
        soundLayerRef.current = layer;
      } else if (layer.audio.paused) {
        await layer.audio.play();
      }
      if (!soundEnabledRef.current) {
        fadeOutMoodSound(layer, 0.12);
        soundLayerRef.current = null;
        return;
      }
      setAudioReady(true);
    } catch {
      setAudioReady(false);
    }
  }

  function toggleSound() {
    if (soundEnabled) {
      soundEnabledRef.current = false;
      soundSessionRef.current += 1;
      fadeOutMoodSound(soundLayerRef.current, 0.16);
      soundLayerRef.current = null;
      setSoundEnabled(false);
      return;
    }
    soundEnabledRef.current = true;
    soundSessionRef.current += 1;
    setSoundEnabled(true);
    void unlockAudio(true);
  }

  function begin(isFast: boolean) {
    if (!story.trim()) return;
    if (crisisTerms.some((term) => story.toLowerCase().includes(term))) { setCrisis(true); return; }
    setFastPath(isFast);
    setStep(isFast ? 2 : 1);
  }

  function detectLocation() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.latitude}&lon=${coords.longitude}&zoom=10&addressdetails=1`, { headers: { 'Accept-Language': 'en' } });
          const place = (await response.json()) as { address?: { city?: string; town?: string; state?: string; country?: string } };
          const city = place.address?.city ?? place.address?.town ?? place.address?.state;
          setLocation([city, place.address?.country].filter(Boolean).join(', ') || `${coords.latitude.toFixed(2)}, ${coords.longitude.toFixed(2)}`);
        } catch {
          const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          const fallbacks: Record<string, string> = { 'Asia/Singapore': 'Singapore', 'Asia/Kuala_Lumpur': 'Kuala Lumpur, Malaysia', 'Asia/Tokyo': 'Tokyo, Japan', 'Asia/Seoul': 'Seoul, South Korea', 'Australia/Sydney': 'Sydney, Australia', 'Europe/London': 'London, UK' };
          setLocation(fallbacks[zone] ?? `${coords.latitude.toFixed(2)}, ${coords.longitude.toFixed(2)}`);
        }
      },
      () => setToast('Location permission was not available. You can type it instead.'),
      { timeout: 8000 },
    );
  }

  async function readWeather(place: string) {
    try {
      const geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(place)}&count=1&language=en&format=json`);
      const geoData = (await geo.json()) as { results?: { latitude: number; longitude: number }[] };
      const found = geoData.results?.[0];
      if (!found) return;
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${found.latitude}&longitude=${found.longitude}&daily=weather_code,temperature_2m_max&timezone=auto&forecast_days=1`);
      const forecast = (await response.json()) as { daily?: { weather_code?: number[]; temperature_2m_max?: number[] } };
      const code = Number(forecast.daily?.weather_code?.[0] ?? 0);
      const max = Math.round(Number(forecast.daily?.temperature_2m_max?.[0] ?? 0));
      if (code >= 51) setWeatherNote(`Rain is possible around ${place}, so the plan keeps an easy indoor fallback.`);
      else if (max >= 34) setWeatherNote(`It may reach ${max}°C around ${place}, so the plan favours shade and a slower middle of the day.`);
      else setWeatherNote('The forecast looks comfortable for this mix of indoor and outdoor time.');
    } catch { setWeatherNote(''); }
  }

  function generate(nextShuffle = shuffle, refinement?: Refinement) {
    const storyAsksForWeekend = /(weekend|overnight|two days|couple of days)/i.test(story);
    const initialSize: EscapeSize = fastPath ? (storyAsksForWeekend || Number(budget || 0) >= 250 ? 'weekend' : 'day') : size;
    const chosenSize = refinement?.size ?? (result?.size ?? initialSize);
    const refinedWants = [...new Set([...selectedWants, ...(refinement?.wants ?? [])])];
    const refinedBudget = budget ? Math.floor(Number(budget) * (refinement?.budgetMultiplier ?? 1)) : 0;
    const plan = chooseEscape(chosenSize, mood.name, refinedWants, refinedBudget, nextShuffle, story, date);
    if (!plan) {
      const cap = `${currency.symbol}${refinedBudget.toLocaleString()} ${currency.code}`;
      setToast(`Aura can’t make a complete ${chosenSize === 'day' ? 'day' : chosenSize === 'weekend' ? 'weekend' : 'longer'} escape within ${cap}. Try a smaller escape or raise the cap.`);
      setTimeout(() => setToast(''), 4600);
      return;
    }
    setResult(plan); setStep(4); setShuffle(nextShuffle); void readWeather(plan.destination);
    void fetch('/api/mood', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mood: mood.name }) });
  }

  function goBack() {
    if (result) { setResult(null); setStep(fastPath ? 2 : 3); return; }
    if (step === 2 && fastPath) setStep(0); else setStep(Math.max(0, step - 1));
  }

  async function share() {
    if (!result) return;
    const text = itineraryText(result, mood.name, `${currency.symbol}${result.price} ${currency.code}`);
    if (navigator.share) {
      try { await navigator.share({ title: `Aura — ${result.title}`, text }); return; } catch { /* use copy fallback */ }
    }
    await navigator.clipboard.writeText(text); setToast('Itinerary copied — ready for WhatsApp or Telegram.'); setTimeout(() => setToast(''), 2400);
  }

  function shareToTelegram() {
    if (!result) return;
    const text = itineraryText(result, mood.name, `${currency.symbol}${result.price} ${currency.code}`);
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  }

  useEffect(() => {
    soundEnabledRef.current = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    const session = soundSessionRef.current + 1;
    soundSessionRef.current = session;
    if (!soundEnabled) {
      fadeOutMoodSound(soundLayerRef.current, 0.4);
      soundLayerRef.current = null;
      return;
    }
    if (!audioReady) return;
    const timer = window.setTimeout(() => {
      const layer = soundLayerRef.current;
      if (!layer || session !== soundSessionRef.current || !soundEnabledRef.current) return;
      if (layer.trackId === currentTrack.id) {
        rampMoodSound(layer, currentTrack.vocal ? 0.11 : 0.16, 1.1);
        return;
      }
      fadeOutMoodSound(layer, 0.28, async () => {
        if (session !== soundSessionRef.current || !soundEnabledRef.current || soundLayerRef.current !== layer) return;
        layer.trackId = currentTrack.id;
        layer.audio.src = currentTrack.src;
        layer.audio.load();
        layer.audio.volume = 0;
        try {
          await layer.audio.play();
          if (session !== soundSessionRef.current || !soundEnabledRef.current || soundLayerRef.current !== layer) {
            fadeOutMoodSound(layer, 0.12);
            return;
          }
          rampMoodSound(layer, currentTrack.vocal ? 0.11 : 0.16, 0.8);
        } catch {
          setToast('Tap Sound on to restart the music.');
          setTimeout(() => setToast(''), 2200);
        }
      });
    }, 1000);
    return () => {
      window.clearTimeout(timer);
      if (soundSessionRef.current === session) soundSessionRef.current += 1;
    };
  }, [audioReady, currentTrack, soundEnabled]);

  useEffect(() => () => {
    soundSessionRef.current += 1;
    fadeOutMoodSound(soundLayerRef.current, 0.1);
  }, []);

  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    void Promise.resolve(context.registerTool({
      name: 'create_mood_matched_escape',
      title: 'Create an Aura escape',
      description: 'Create and display one mood-matched Aura itinerary from a mood, short situation, escape size, starting place, and optional budget and preferences.',
      inputSchema: {
        type: 'object',
        properties: {
          mood: { type: 'string', enum: moods.map((item) => item.name) },
          story: { type: 'string', minLength: 1 },
          escapeSize: { type: 'string', enum: ['day', 'weekend', 'global'] },
          location: { type: 'string', minLength: 1 },
          budget: { type: 'number', minimum: 0 },
          wants: { type: 'array', items: { type: 'string', enum: wants }, uniqueItems: true },
        },
        required: ['mood', 'story', 'escapeSize', 'location'],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(raw) {
        const input = raw as { mood?: string; story?: string; escapeSize?: EscapeSize; location?: string; budget?: number; wants?: string[] };
        const index = moods.findIndex((item) => item.name === input.mood);
        if (index < 0 || !input.story?.trim() || !input.location?.trim() || !input.escapeSize) throw new Error('A valid mood, story, escape size and location are required.');
        const preferences = (input.wants ?? []).filter((item) => wants.includes(item));
        const plan = chooseEscape(input.escapeSize, moods[index].name, preferences, input.budget ?? 0, 0, input.story);
        if (!plan) throw new Error('No complete escape in Aura’s catalogue fits that budget cap. Try a smaller escape or increase the budget.');
        setMoodIndex(index); setStory(input.story); setSize(input.escapeSize); setLocation(input.location); setBudget(input.budget ? String(input.budget) : ''); setSelectedWants(preferences); setFastPath(false); setResult(plan); setStep(4); setWeatherNote('');
        void fetch('/api/mood', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mood: moods[index].name }) });
        return { title: plan.title, destination: plan.destination, duration: plan.duration, estimatedSpend: plan.price };
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);
    return () => lifecycle.abort();
  }, []);

  return (
    <main className={`aura-shell ${result ? 'has-result' : ''}`} style={{ '--mood-a': mood.colors[0], '--mood-b': mood.colors[1], '--mood-c': mood.colors[2] } as React.CSSProperties} onPointerDownCapture={(event) => { if (!(event.target as HTMLElement).closest('.sound-button')) void unlockAudio(); }} onKeyDownCapture={(event) => { if (!(event.target as HTMLElement).closest('.sound-button')) void unlockAudio(); }}>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="site-header">
        <button className="icon-button" aria-label="Go back" onClick={goBack} disabled={step === 0 && !result}><ArrowLeft size={19} /></button>
        <div className="wordmark">Plan My Escape</div><div className="header-actions"><div className="header-note">ESCAPES THAT MEET YOU WHERE YOU ARE</div><button className="sound-button" type="button" aria-pressed={soundEnabled} aria-label={soundEnabled ? 'Turn mood sound off' : 'Turn mood sound on'} title={soundEnabled ? 'Turn mood sound off' : 'Turn mood sound on'} onClick={toggleSound}>{soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}<span>{soundEnabled ? 'Sound on' : 'Sound off'}</span></button></div>
      </header>
      <div className="progress" aria-label={`Step ${progress + 1} of 5`}>{[0, 1, 2, 3, 4].map((item) => <span key={item} className={item === progress ? 'active' : item < progress ? 'done' : ''} />)}</div>

      <section className="experience">
        <div className={`planner ${result ? 'planner-compact' : ''}`}>
          {result ? <CompactSummary mood={mood.name} story={story} location={location} size={size} budget={budget} currency={currency} fastPath={fastPath} onRestart={() => { setResult(null); setStep(0); }} /> : <>
            {step === 0 && <div className="screen mood-screen">
              <p className="eyebrow">A moment for you</p><h1>How are you<br /><em>feeling right now?</em></h1>
              <div className="mood-carousel" aria-label="Choose your current feeling">
                <button className="carousel-arrow left" aria-label="Previous feeling" onClick={() => nudgeMood(-1)}><ChevronLeft /></button>
                <div className="orb-stage">{[-1, 0, 1].map((offset) => { const index = (moodIndex + offset + moods.length) % moods.length; const item = moods[index]; return <button key={`${item.name}-${offset}`} className={`mood-orb ${offset === 0 ? 'selected' : ''}`} style={{ '--offset': offset, background: `linear-gradient(155deg, ${item.colors[0]}, ${item.colors[1]} 52%, ${item.colors[2]})` } as React.CSSProperties} onClick={() => offset && nudgeMood(offset)} aria-label={offset === 0 ? `${item.name}, selected` : `Choose ${item.name}`}><span>{item.name}</span></button>; })}</div>
                <button className="carousel-arrow right" aria-label="Next feeling" onClick={() => nudgeMood(1)}><ChevronRight /></button>
              </div>
              <div className="mood-count">{moodIndex + 1} / {moods.length}</div>
              <div className={`now-playing ${soundEnabled && audioReady ? 'active' : ''}`} aria-live="polite"><span className="now-playing-pulse" />{soundEnabled && audioReady ? `Now playing · ${currentTrack.title}${currentTrack.vocal ? ' · vocal' : ''}` : 'Tap anywhere to hear this feeling'}</div>
              <label className="field story-field"><span>Tell me what’s going on</span><textarea value={story} onChange={(event) => setStory(event.target.value)} placeholder="Work has been relentless and I need a day that feels like mine again…" /></label>
              <button className="primary-button" disabled={!story.trim()} onClick={() => begin(false)}>Continue <ArrowRight size={17} /></button>
              <button className="surprise-button" disabled={!story.trim()} onClick={() => begin(true)}><Sparkles size={14} /> Just get me out of here</button>
              <p className="privacy-note">Your story stays private. Aura records only the mood you submit, anonymously.</p>
            </div>}

            {step === 1 && <div className="screen"><p className="eyebrow">Give it a shape</p><h1>How big an escape<br /><em>do you need?</em></h1><div className="size-list">
              {([['day', 'Just today', 'A few good hours, home in your own bed'], ['weekend', 'A weekend', 'Enough distance to feel the week fall away'], ['global', 'Wander further', 'A proper departure from the usual']] as const).map(([value, title, detail]) => <button key={value} className="size-button" onClick={() => { setSize(value); setStep(2); }}><span><strong>{title}</strong><small>{detail}</small></span><ArrowRight size={19} /></button>)}
            </div></div>}

            {step === 2 && <div className="screen practical-screen"><p className="eyebrow">A few practical things</p><h1>{fastPath ? 'Give Aura just enough' : 'Let’s make it feel easy'}</h1><div className="form-grid">
              {!fastPath && size !== 'day' && <label className="field"><span><CalendarDays size={14} /> Pick a date</span><input type="date" value={date} min={new Date().toISOString().slice(0, 10)} onChange={(event) => setDate(event.target.value)} /></label>}
              <label className="field"><span>Starting point</span><div className="input-action"><input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="City or neighbourhood" /><button onClick={detectLocation} type="button"><LocateFixed size={15} /> Use mine</button></div></label>
              <label className="field"><span>Budget cap <small>({currency.code} · never exceeded)</small></span><div className="money-input"><b>{currency.symbol}</b><input type="number" min="0" value={budget} onChange={(event) => setBudget(event.target.value)} placeholder={fastPath ? '250' : size === 'global' ? '1800' : size === 'weekend' ? '450' : '80'} /></div></label>
              {!fastPath && <><fieldset><legend>How far are you happy to travel?</legend><div className="pill-row">{distanceOptions.map((option) => <button type="button" key={option} className={distance === option ? 'pill selected' : 'pill'} onClick={() => setDistance(option)}>{option}{distance === option && <Check size={13} />}</button>)}</div></fieldset><fieldset><legend>Who’s coming?</legend><div className="pill-row">{['Solo', 'A friend', 'My partner', 'Family'].map((option) => <button type="button" key={option} className={companions === option ? 'pill selected' : 'pill'} onClick={() => setCompanions(option)}>{option}{companions === option && <Check size={13} />}</button>)}</div></fieldset></>}
            </div><button className="primary-button" disabled={!location.trim()} onClick={() => fastPath ? generate() : setStep(3)}>{fastPath ? 'Find my escape' : 'One last thing'} <ArrowRight size={17} /></button>{fastPath && <p className="fast-note">Aura assumes solo and chooses a day or weekend escape. Global trips only appear in the full flow.</p>}</div>}

            {step === 3 && <div className="screen preferences-screen"><p className="eyebrow">Only if it matters today</p><h1>What would make this<br /><em>feel good?</em></h1><button type="button" className={selectedWants.includes('A surprise') ? 'surprise-want selected' : 'surprise-want'} onClick={() => setSelectedWants((current) => current.includes('A surprise') ? current.filter((item) => item !== 'A surprise') : [...current, 'A surprise'])}><Sparkles size={17} /><span><strong>Surprise me</strong><small>Let Aura take the lead</small></span>{selectedWants.includes('A surprise') && <Check size={16} />}</button><div className="want-grid">{essentialWants.filter((want) => want !== 'A surprise').map((want) => <button type="button" key={want} className={selectedWants.includes(want) ? 'want selected' : 'want'} onClick={() => setSelectedWants((current) => current.includes(want) ? current.filter((item) => item !== want) : [...current, want])}>{want}{selectedWants.includes(want) && <Check size={14} />}</button>)}</div>{showMoreWants ? <><div className="want-grid extra-wants">{extraWants.map((want) => <button type="button" key={want} className={selectedWants.includes(want) ? 'want selected' : 'want'} onClick={() => setSelectedWants((current) => current.includes(want) ? current.filter((item) => item !== want) : [...current, want])}>{want}{selectedWants.includes(want) && <Check size={14} />}</button>)}</div><label className="field avoid-field"><span>Anything to avoid?</span><input value={avoid} onChange={(event) => setAvoid(event.target.value)} placeholder="Crowds, early mornings, long walks…" /></label></> : null}<button type="button" className="more-wants" onClick={() => setShowMoreWants((current) => !current)}>{showMoreWants ? 'Show fewer choices' : 'More ways to shape it'} <ArrowRight size={14} /></button><button className="primary-button" onClick={() => generate()}>Find my escape <Sparkles size={16} /></button></div>}
          </>}
        </div>

        {result && <article className="result-panel">{result.image ? <figure className="result-image" aria-label={result.imageAlt ?? result.destination} style={{ backgroundImage: `url(${result.image})` }}><span>YOUR AURA MATCH</span><a href="https://commons.wikimedia.org/wiki/File:Singapore_Pulau_Ubin_02.jpg" target="_blank" rel="noreferrer">Photo · Wikimedia Commons</a></figure> : null}<div className="result-body">
          <div className="result-meta"><span>Your escape</span><span>{result.duration}</span></div><h1><span className="result-destination">{result.destination}</span><span className="result-title">{result.title}</span></h1>
          <p className="why"><Sparkles size={15} /><span><strong>Why it fits your mood</strong>{result.why}</span></p>{weatherNote && <p className="weather-note">{weatherNote}</p>}
          {result.event && <p className="event-banner"><span>LIVE NOW</span>{result.event.label}</p>}<div className="itinerary">{result.stops.map((stop, index) => <div className="stop" key={`${stop.time}-${stop.title}`}><div className="stop-rail"><span className="stop-emoji" aria-hidden="true">{stopEmoji(stop)}</span><time>{stop.time}</time></div><div>{stop.kind && <small className="venue-kind">{stop.kind} · Stop {index + 1}</small>}<h3>{stop.title}</h3><p>{stop.detail}</p></div><a href={searchUrl(stop.search)} target="_blank" rel="noreferrer">Check details ↗</a></div>)}</div>
          <div className="estimate"><span>Estimated spend</span><strong>{currency.symbol}{result.price} <small>{currency.code}</small></strong><p>This itinerary stays within your stated cap. Prices can still change, so check each stop before you go.</p></div>
          <section className="refine-panel" aria-label="Refine this plan"><div><span>Refine this plan</span><p>Choose one direction and Aura will reshape the escape.</p></div><div className="refine-choices">{refinementsForMood(mood.name, result.size, Boolean(budget)).map((refinement) => <button key={refinement.label} type="button" onClick={() => generate(shuffle + 1, refinement)}>{refinement.label}<ArrowRight size={14} /></button>)}</div></section><div className="result-actions"><button className="primary-button" onClick={share}><Share2 size={16} /> Share this escape</button><button className="secondary-button telegram-button" onClick={shareToTelegram}><Send size={15} /> Send on Telegram</button><button className="secondary-button" onClick={async () => { await navigator.clipboard.writeText(itineraryText(result, mood.name, `${currency.symbol}${result.price} ${currency.code}`)); setToast('Itinerary copied.'); setTimeout(() => setToast(''), 2200); }}><Copy size={15} /> Copy text</button></div>
        </div></article>}
      </section>

      {crisis && <dialog open className="crisis-overlay" aria-labelledby="support-title"><div className="crisis-card"><p className="eyebrow">Pause here</p><h2 id="support-title">Your safety matters more than an itinerary.</h2><p>Please contact someone you trust and stay with them. If you may act on these thoughts, call your local emergency services now or go to the nearest emergency department.</p><a href="https://findahelpline.com" target="_blank" rel="noreferrer">Find immediate support where you are</a><button className="quiet-button" onClick={() => setCrisis(false)}>Go back</button></div></dialog>}
      {toast && <output className="toast">{toast}</output>}
    </main>
  );
}

function CompactSummary({ mood, story, location, size, budget, currency, fastPath, onRestart }: { mood: string; story: string; location: string; size: EscapeSize; budget: string; currency: { symbol: string; code: string }; fastPath: boolean; onRestart: () => void }) {
  return <div className="compact-summary"><p className="eyebrow">Your starting point</p><div className="mini-orb" /><h2>{mood}</h2><p>“{story}”</p><dl><div><dt>From</dt><dd>{location || 'Singapore'}</dd></div><div><dt>Escape</dt><dd>{fastPath ? 'Aura chose for you' : size === 'day' ? 'Just today' : size === 'weekend' ? 'A weekend' : 'Wander further'}</dd></div><div><dt>Budget</dt><dd>{budget ? `${currency.symbol}${budget} ${currency.code}` : 'Flexible'}</dd></div></dl><button className="quiet-button" onClick={onRestart}>Start again</button></div>;
}
