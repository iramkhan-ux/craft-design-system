import { useState, useSyncExternalStore } from 'react';
import { motionTokens } from '../tokens/generated/motion';
import type { MotionToken } from '../tokens/generated/motion';

const v = (name: string) => `var(--craft-color-${name})`;

// This page is built with the text styles it documents, so a broken style shows up here first.
const body = 'craft-text-body-medium-regular';
const bodyBold = 'craft-text-body-medium-semibold';
const small = 'craft-text-body-small-regular';

const byGroup = (group: MotionToken['group']) => motionTokens.filter((t) => t.group === group);

// Samples only move when someone presses Play, and not at all when the person prefers reduced motion.
const reducedQuery = '(prefers-reduced-motion: reduce)';
function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const q = window.matchMedia(reducedQuery);
      q.addEventListener('change', onChange);
      return () => q.removeEventListener('change', onChange);
    },
    () => window.matchMedia(reducedQuery).matches,
    () => false,
  );
}

function CopyText({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      title={`Copy ${text}`}
      className={small}
      onClick={() => {
        void navigator.clipboard?.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      style={{ all: 'unset', cursor: 'pointer', font: 'inherit', color: v('surface-text-gray-normal'), wordBreak: 'break-all' }}
    >
      {copied ? 'Copied' : text}
    </button>
  );
}

function Page({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <div
      data-theme="light"
      className={body}
      style={{ background: v('surface-background-gray-subtle'), color: v('surface-text-gray-normal'), padding: 24, minHeight: '100vh' }}
    >
      <h1 className="craft-text-heading-2xlarge-semibold" style={{ margin: 0 }}>
        {title}
      </h1>
      <p style={{ maxWidth: 640, color: v('surface-text-gray-subtle') }}>{intro}</p>
      {children}
    </div>
  );
}

const cell = { padding: '10px 12px', borderBottom: `1px solid ${v('surface-border-gray-subtle')}`, textAlign: 'left', verticalAlign: 'middle' } as const;
function Table({ head, children }: { head: string[]; children: React.ReactNode }) {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%', background: v('surface-background-gray-intense'), border: `1px solid ${v('surface-border-gray-subtle')}` }}>
      <thead>
        <tr>
          {head.map((h) => (
            <th key={h} className={bodyBold} style={{ ...cell, color: v('surface-text-gray-subtle') }}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

const TRACK = 200;
const dotSize = 16;

/** A dot that slides along a track when `run` flips. `delay`, `duration` and `easing` are CSS values. */
function Dot({ run, reduced, duration, delay = '0ms', easing = 'var(--craft-easing-standard)' }: { run: boolean; reduced: boolean; duration: string; delay?: string; easing?: string }) {
  return (
    <div style={{ width: TRACK, height: dotSize, background: v('surface-background-gray-moderate'), borderRadius: 'var(--craft-radius-max)', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: dotSize,
          height: dotSize,
          borderRadius: 'var(--craft-radius-round)',
          background: v('interactive-background-primary-default'),
          transform: run ? `translateX(${TRACK - dotSize}px)` : 'translateX(0)',
          transition: reduced ? 'none' : `transform ${duration} ${easing} ${delay}`,
        }}
      />
    </div>
  );
}

function Play({ onPlay }: { onPlay: () => void }) {
  return (
    <button
      type="button"
      className={bodyBold}
      onClick={onPlay}
      style={{
        cursor: 'pointer',
        padding: '8px 16px',
        borderRadius: 'var(--craft-radius-small)',
        border: `1px solid ${v('interactive-border-gray-default')}`,
        background: v('surface-background-gray-intense'),
        color: v('surface-text-gray-normal'),
        marginBottom: 16,
      }}
    >
      Play all
    </button>
  );
}

/** Flips `run` off, then on, so every dot slides again from the start. */
function useReplay() {
  const [run, setRun] = useState(false);
  const play = () => {
    setRun(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setRun(true)));
  };
  return { run, play };
}

export function DurationPage() {
  const { run, play } = useReplay();
  const reduced = useReducedMotion();
  return (
    <Page title="Duration" intro="How long an animation takes. Use these for every transition. Press Play to see each one, using the standard easing. Click a variable to copy it.">
      <Play onPlay={play} />
      <Table head={['Token', 'Value', 'CSS variable', 'Sample']}>
        {byGroup('duration').map((t) => (
          <tr key={t.name}>
            <td style={cell} className={bodyBold}>{t.name}</td>
            <td style={cell} className={body}>{t.value}</td>
            <td style={cell}><CopyText text={t.cssVar} /></td>
            <td style={cell}><Dot run={run} reduced={reduced} duration={`var(${t.cssVar})`} /></td>
          </tr>
        ))}
      </Table>
    </Page>
  );
}

export function DelayPage() {
  const { run, play } = useReplay();
  const reduced = useReducedMotion();
  return (
    <Page title="Delay" intro="How long to wait before an animation starts. Press Play to see each delay, followed by a moderate move. Click a variable to copy it.">
      <Play onPlay={play} />
      <Table head={['Token', 'Value', 'CSS variable', 'Sample']}>
        {byGroup('delay').map((t) => (
          <tr key={t.name}>
            <td style={cell} className={bodyBold}>{t.name}</td>
            <td style={cell} className={body}>{t.value}</td>
            <td style={cell}><CopyText text={t.cssVar} /></td>
            <td style={cell}><Dot run={run} reduced={reduced} duration="var(--craft-duration-moderate)" delay={`var(${t.cssVar})`} /></td>
          </tr>
        ))}
      </Table>
    </Page>
  );
}

const W = 96;
const H = 96;
const PAD = 24; // room above and below, because some curves go past 0 and 1
function Curve({ c }: { c: [number, number, number, number] }) {
  const [x1, y1, x2, y2] = c;
  const px = (x: number) => x * W;
  const py = (y: number) => PAD + (1 - y) * H;
  const d = `M ${px(0)} ${py(0)} C ${px(x1)} ${py(y1)}, ${px(x2)} ${py(y2)}, ${px(1)} ${py(1)}`;
  return (
    <svg width={W} height={H + PAD * 2} role="img" aria-label={`Curve for cubic-bezier(${c.join(', ')})`}>
      <line x1={0} y1={py(0)} x2={W} y2={py(0)} stroke={v('surface-border-gray-subtle')} />
      <line x1={0} y1={py(1)} x2={W} y2={py(1)} stroke={v('surface-border-gray-subtle')} />
      <path d={d} fill="none" stroke={v('interactive-background-primary-default')} strokeWidth={2} />
    </svg>
  );
}

export function EasingPage() {
  const { run, play } = useReplay();
  const reduced = useReducedMotion();
  return (
    <Page title="Easing" intro="How an animation speeds up and slows down. Each one has a job. Press Play to see them move over a gentle duration. Click a variable to copy it.">
      <Play onPlay={play} />
      <Table head={['Token', 'Used for', 'CSS variable', 'Curve', 'Sample']}>
        {byGroup('easing').map((t) => (
          <tr key={t.name}>
            <td style={cell} className={bodyBold}>{t.name}</td>
            <td style={cell} className={body}>{t.use}</td>
            <td style={cell}>
              <CopyText text={t.cssVar} />
              <div className={small} style={{ color: v('surface-text-gray-subtle') }}>{t.value}</div>
            </td>
            <td style={cell}>{t.curve && <Curve c={t.curve} />}</td>
            <td style={cell}><Dot run={run} reduced={reduced} duration="var(--craft-duration-gentle)" easing={`var(${t.cssVar})`} /></td>
          </tr>
        ))}
      </Table>
    </Page>
  );
}
