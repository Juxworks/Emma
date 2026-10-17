// Flat builder illustrations drawn in the site's palette (see globals.css @theme).
// All are decorative, so they are hidden from screen readers.

const C = {
  ink: "#111827",
  inkSoft: "#1f2937",
  control: "#374151",
  line: "#e5e7eb",
  sky: "#d6e6e8",
  sage: "#e2ece9",
  sageDeep: "#b9d0c8",
  sand: "#f4e8d3",
  sandDeep: "#efe3cf",
  frost: "#edf5f5",
  teal: "#4b7b84",
  tealLight: "#5a848d",
  tealDark: "#3b636b",
  amber: "#f59e0b",
  amberInk: "#d97706",
  wood: "#d4a373",
  skin: "#e0b48f",
  skinDeep: "#b98563",
  white: "#ffffff",
};

type Pose = "idle" | "point" | "hold" | "give" | "carry";

function Arm({ from, to, color }: { from: [number, number]; to: [number, number]; color: string }) {
  return (
    <>
      <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke={color} strokeWidth={8} strokeLinecap="round" />
      <circle cx={to[0]} cy={to[1]} r={4} fill={C.skin} />
    </>
  );
}

/** A standing figure, feet at (x, y). `hat` adds a hard hat and hi-vis stripe. */
function Person({
  x,
  y,
  s = 1,
  flip = false,
  hat = true,
  shirt = C.teal,
  skin = C.skin,
  pose = "idle",
}: {
  x: number;
  y: number;
  s?: number;
  flip?: boolean;
  hat?: boolean;
  shirt?: string;
  skin?: string;
  pose?: Pose;
}) {
  const left: [number, number] = pose === "hold" ? [-5, -58] : [-18, -44];
  const right: [number, number] =
    pose === "point" ? [32, -102] : pose === "hold" ? [5, -58] : pose === "give" ? [36, -66] : pose === "carry" ? [18, -96] : [18, -44];
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      {pose === "carry" && <rect x={-34} y={-104} width={76} height={7} rx={2} fill={C.wood} transform="rotate(-8 4 -100)" />}
      <path d="M-7 -40 L-8 -3 M7 -40 L8 -3" stroke={C.inkSoft} strokeWidth={10} strokeLinecap="round" />
      <ellipse cx={-10} cy={0} rx={8} ry={3.5} fill={C.ink} />
      <ellipse cx={10} cy={0} rx={8} ry={3.5} fill={C.ink} />
      <rect x={-15} y={-80} width={30} height={44} rx={10} fill={shirt} />
      {hat && <rect x={-15} y={-60} width={30} height={5} fill={C.amber} />}
      <rect x={-4} y={-82} width={8} height={6} rx={2} fill={skin} />
      <Arm from={[-12, -73]} to={left} color={shirt} />
      <Arm from={[12, -73]} to={right} color={shirt} />
      {pose === "hold" && (
        <g>
          <rect x={-11} y={-72} width={22} height={28} rx={3} fill={C.white} stroke={C.tealDark} strokeWidth={2} />
          <rect x={-7} y={-56} width={4} height={8} fill={C.teal} />
          <rect x={-1} y={-62} width={4} height={14} fill={C.amber} />
          <rect x={5} y={-59} width={3} height={11} fill={C.tealLight} />
        </g>
      )}
      <circle cx={0} cy={-92} r={10.5} fill={skin} />
      {hat ? (
        <>
          <path d="M-11.5 -95 A11.5 11.5 0 0 1 11.5 -95 Z" fill={C.amber} />
          <rect x={-2} y={-107} width={4} height={10} rx={2} fill={C.amberInk} opacity={0.5} />
          <rect x={-15} y={-97} width={30} height={4} rx={2} fill={C.amberInk} />
        </>
      ) : (
        <path d="M-10.5 -93 A10.5 10.5 0 0 1 10.5 -93 Q4 -98 -2 -96 Q-7 -95 -10.5 -93 Z" fill={C.inkSoft} />
      )}
    </g>
  );
}

function Sparkle({ x, y, r = 10, color = C.amber }: { x: number; y: number; r?: number; color?: string }) {
  const k = r * 0.2;
  return (
    <path
      transform={`translate(${x} ${y})`}
      d={`M0 ${-r} Q${k} ${-k} ${r} 0 Q${k} ${k} 0 ${r} Q${-k} ${k} ${-r} 0 Q${-k} ${-k} 0 ${-r} Z`}
      fill={color}
    />
  );
}

function Backdrop() {
  return (
    <>
      <circle cx={200} cy={150} r={128} fill={C.sky} opacity={0.75} />
      <circle cx={322} cy={66} r={26} fill={C.sand} />
      <ellipse cx={200} cy={264} rx={176} ry={14} fill={C.sage} />
    </>
  );
}

type Props = { className?: string };

function Frame({ className, children }: Props & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

/** Consultant walking a client through a blueprint — consultation & design. */
export function PlanningScene({ className }: Props) {
  return (
    <Frame className={className}>
      <Backdrop />
      <path d="M178 172 L166 262 M272 172 L284 262 M225 172 L225 252" stroke={C.wood} strokeWidth={6} strokeLinecap="round" />
      <rect x={150} y={56} width={150} height={118} rx={8} fill={C.tealDark} />
      <g stroke={C.white} opacity={0.12}>
        {[76, 96, 116, 136, 156].map((y) => (
          <line key={y} x1={150} y1={y} x2={300} y2={y} />
        ))}
        {[170, 190, 210, 230, 250, 270, 290].map((x) => (
          <line key={x} x1={x} y1={56} x2={x} y2={174} />
        ))}
      </g>
      <g fill="none" stroke={C.white} strokeWidth={2.5} strokeLinejoin="round">
        <path d="M180 104 L225 78 L270 104" />
        <rect x={186} y={104} width={78} height={50} />
        <rect x={217} y={128} width={16} height={26} />
        <rect x={195} y={114} width={14} height={11} />
        <rect x={241} y={114} width={14} height={11} />
      </g>
      <path d="M186 164 L264 164 M186 160 L186 168 M264 160 L264 168" stroke={C.amber} strokeWidth={2} />
      <Person x={108} y={262} s={1.55} pose="point" />
      <Person x={336} y={262} s={1.5} flip hat={false} shirt={C.wood} skin={C.skinDeep} />
      <Sparkle x={330} y={128} r={9} />
      <Sparkle x={128} y={74} r={6} color={C.teal} />
    </Frame>
  );
}

/** A two-storey house going up, with crane and scaffold — the build itself. */
export function ConstructionScene({ className }: Props) {
  return (
    <Frame className={className}>
      <Backdrop />
      {/* crane */}
      <g stroke={C.amberInk} strokeWidth={3} strokeLinecap="round">
        <path d="M296 262 L296 46 M308 262 L308 46" />
        {[230, 198, 166, 134, 102, 70].map((y) => (
          <path key={y} d={`M296 ${y + 32} L308 ${y} M296 ${y} L308 ${y}`} />
        ))}
        <path d="M150 44 L352 44 M150 52 L352 52" />
        {[160, 180, 200, 220, 240, 260, 280, 320, 340].map((x) => (
          <path key={x} d={`M${x} 44 L${x + 10} 52`} />
        ))}
        <path d="M302 28 L160 44 M302 28 L350 44" strokeWidth={2} />
      </g>
      <rect x={294} y={22} width={16} height={10} rx={2} fill={C.amber} />
      <rect x={290} y={52} width={22} height={16} rx={3} fill={C.amber} />
      <rect x={292} y={55} width={10} height={8} rx={1} fill={C.sky} />
      <rect x={332} y={52} width={20} height={16} rx={2} fill={C.control} />
      <line x1={204} y1={52} x2={204} y2={92} stroke={C.control} strokeWidth={1.5} />
      <path d="M204 92 l-24 10 M204 92 l24 10" stroke={C.control} strokeWidth={1.5} />
      <rect x={172} y={100} width={64} height={7} rx={1.5} fill={C.amber} />

      {/* house frame */}
      <rect x={90} y={190} width={150} height={72} fill={C.white} />
      <rect x={106} y={206} width={30} height={26} rx={2} fill={C.sky} />
      <rect x={150} y={206} width={22} height={26} rx={2} fill={C.sky} />
      <rect x={190} y={214} width={24} height={48} rx={2} fill={C.teal} />
      <rect x={84} y={184} width={162} height={8} rx={1.5} fill={C.tealLight} />
      {[92, 162, 230].map((x) => (
        <rect key={x} x={x} y={126} width={8} height={58} fill={C.tealLight} />
      ))}
      <rect x={84} y={120} width={162} height={8} rx={1.5} fill={C.tealLight} />
      <path d="M100 184 L160 128 M170 184 L230 128" stroke={C.line} strokeWidth={2} />

      {/* scaffold */}
      <g stroke={C.control} strokeWidth={2.5} strokeLinecap="round">
        <path d="M58 262 L58 112 M80 262 L80 112" />
        {[232, 202, 172, 142, 112].map((y) => (
          <line key={y} x1={56} y1={y} x2={82} y2={y} />
        ))}
        <path d="M58 262 L80 232 M58 202 L80 172 M58 142 L80 112" strokeWidth={1.5} />
      </g>
      {[172, 112].map((y) => (
        <rect key={y} x={54} y={y - 5} width={32} height={5} rx={1} fill={C.wood} />
      ))}

      <Person x={122} y={120} s={0.85} pose="hold" />
      <Person x={346} y={262} s={1.3} pose="carry" flip />

      {/* bricks + cones */}
      {[0, 1, 2].map((r) =>
        [0, 1].map((c) => <rect key={`${r}${c}`} x={20 + c * 15 + (r % 2) * 7} y={252 - r * 8} width={14} height={7} rx={1} fill={C.amberInk} opacity={0.75} />),
      )}
      {[260, 280].map((x) => (
        <g key={x}>
          <path d={`M${x - 9} 262 L${x} 238 L${x + 9} 262 Z`} fill={C.amber} />
          <rect x={x - 6} y={250} width={12} height={4} fill={C.white} />
        </g>
      ))}
    </Frame>
  );
}

/** Builder with a tablet feeding a market dashboard over a terrace row — big data. */
export function DataScene({ className }: Props) {
  const bars = [34, 52, 44, 68, 60, 82];
  return (
    <Frame className={className}>
      <Backdrop />
      {/* terrace row */}
      {[0, 1, 2].map((i) => {
        const x = 172 + i * 64;
        return (
          <g key={i}>
            <rect x={x} y={214} width={64} height={48} fill={C.white} stroke={C.line} />
            <path d={`M${x - 4} 216 L${x + 32} 192 L${x + 68} 216 Z`} fill={i === 1 ? C.tealLight : C.teal} />
            <rect x={x + 10} y={226} width={16} height={14} rx={1.5} fill={C.sky} />
            <rect x={x + 38} y={232} width={14} height={30} rx={1.5} fill={C.sand} stroke={C.wood} />
          </g>
        );
      })}
      {/* dashboard */}
      <rect x={156} y={38} width={204} height={136} rx={14} fill={C.white} stroke={C.line} />
      <circle cx={172} cy={54} r={3} fill={C.line} />
      <circle cx={182} cy={54} r={3} fill={C.line} />
      <rect x={300} y={50} width={44} height={8} rx={4} fill={C.frost} />
      <line x1={172} y1={158} x2={344} y2={158} stroke={C.line} strokeWidth={1.5} />
      {bars.map((h, i) => (
        <rect key={i} x={178 + i * 27} y={158 - h} width={16} height={h} rx={3} fill={i === 3 ? C.teal : C.sky} />
      ))}
      <path d="M186 118 L213 104 L240 110 L267 84 L294 90 L321 68" fill="none" stroke={C.amber} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      {[[186, 118], [267, 84], [321, 68]].map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r={4.5} fill={C.white} stroke={C.amberInk} strokeWidth={2} />
      ))}
      {/* map pin */}
      <g transform="translate(136 90)">
        <path d="M0 0 C-14 -16 -14 -36 0 -36 C14 -36 14 -16 0 0 Z" fill={C.amberInk} />
        <circle cx={0} cy={-23} r={5.5} fill={C.white} />
      </g>
      <path d="M114 150 C128 136 142 128 156 122" fill="none" stroke={C.teal} strokeWidth={2} strokeDasharray="4 5" strokeLinecap="round" />
      <Person x={92} y={262} s={1.6} pose="hold" />
      <Sparkle x={372} y={30} r={10} />
      <Sparkle x={146} y={34} r={6} color={C.teal} />
    </Frame>
  );
}

/** A finished home and a key handover — completion. */
export function HandoverScene({ className }: Props) {
  return (
    <Frame className={className}>
      <Backdrop />
      {/* tree */}
      <rect x={34} y={208} width={6} height={54} rx={2} fill={C.wood} />
      <circle cx={37} cy={196} r={22} fill={C.sageDeep} />
      <circle cx={48} cy={210} r={13} fill={C.sageDeep} />
      {/* house */}
      <rect x={70} y={146} width={144} height={116} fill={C.white} stroke={C.line} />
      <rect x={60} y={136} width={164} height={13} rx={2} fill={C.teal} />
      <rect x={70} y={196} width={144} height={6} fill={C.sandDeep} />
      <rect x={84} y={160} width={48} height={28} rx={2} fill={C.sky} />
      <rect x={150} y={160} width={48} height={28} rx={2} fill={C.sky} />
      <line x1={108} y1={160} x2={108} y2={188} stroke={C.white} strokeWidth={2} />
      <line x1={174} y1={160} x2={174} y2={188} stroke={C.white} strokeWidth={2} />
      <rect x={84} y={212} width={34} height={26} rx={2} fill={C.sky} />
      <rect x={134} y={212} width={30} height={50} rx={2} fill={C.tealDark} />
      <circle cx={158} cy={238} r={2} fill={C.amber} />
      <rect x={176} y={226} width={30} height={36} rx={3} fill={C.sageDeep} />
      {/* people + key */}
      <Person x={256} y={262} s={1.45} pose="give" />
      <Person x={354} y={262} s={1.45} flip hat={false} shirt={C.wood} skin={C.skinDeep} pose="give" />
      <g transform="translate(305 166)">
        <circle cx={-6} cy={0} r={6} fill="none" stroke={C.amberInk} strokeWidth={3} />
        <path d="M0 0 L12 0 M8 0 L8 5 M12 0 L12 4" stroke={C.amberInk} strokeWidth={3} strokeLinecap="round" />
      </g>
      {/* check badge */}
      <circle cx={304} cy={76} r={24} fill={C.teal} />
      <path d="M293 77 L301 85 L316 68" fill="none" stroke={C.white} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" />
      <Sparkle x={262} y={60} r={7} />
      <Sparkle x={346} y={108} r={6} color={C.teal} />
    </Frame>
  );
}

/** Two consultants reviewing a house model and data cards — the team. */
export function TeamScene({ className }: Props) {
  return (
    <Frame className={className}>
      <Backdrop />
      {/* floating data cards */}
      <g>
        <rect x={142} y={42} width={78} height={50} rx={10} fill={C.white} stroke={C.line} />
        {[20, 30, 24, 38].map((h, i) => (
          <rect key={i} x={154 + i * 15} y={82 - h} width={9} height={h} rx={2} fill={i === 3 ? C.teal : C.sky} />
        ))}
        <rect x={232} y={62} width={74} height={40} rx={10} fill={C.white} stroke={C.line} />
        <rect x={244} y={74} width={36} height={6} rx={3} fill={C.teal} />
        <rect x={244} y={86} width={50} height={6} rx={3} fill={C.frost} />
      </g>
      {/* table + model */}
      <rect x={124} y={204} width={160} height={9} rx={3} fill={C.wood} />
      <path d="M136 213 L132 262 M272 213 L276 262" stroke={C.wood} strokeWidth={6} strokeLinecap="round" />
      <rect x={168} y={164} width={72} height={40} fill={C.white} stroke={C.line} />
      <path d="M162 166 L204 136 L246 166 Z" fill={C.teal} />
      <rect x={178} y={174} width={14} height={12} rx={1.5} fill={C.sky} />
      <rect x={216} y={174} width={14} height={12} rx={1.5} fill={C.sky} />
      <rect x={198} y={184} width={12} height={20} rx={1.5} fill={C.tealDark} />
      <Person x={88} y={262} s={1.5} pose="point" />
      <Person x={326} y={262} s={1.5} flip pose="hold" shirt={C.tealLight} skin={C.skinDeep} />
      <Sparkle x={124} y={58} r={8} />
      <Sparkle x={334} y={46} r={6} color={C.teal} />
    </Frame>
  );
}
