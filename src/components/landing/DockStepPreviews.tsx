/**
 * Product mock previews for the Dock & Operational Flow How-It-Works flow.
 */
import { Camera, Plug, Eye, ArrowRightLeft, BarChart3, CheckCircle2 } from "lucide-react";
import dockImg from "@/assets/Images/landing/dock-utilization-overlay.jpg";

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 md:p-5 min-h-[340px] text-[#111] text-xs leading-snug">{children}</div>
);

const Pill = ({ tone = "blue", children }: { tone?: "blue" | "green" | "amber" | "red"; children: React.ReactNode }) => {
  const tones: Record<string, string> = {
    blue: "bg-[#E8F0FF] text-[#002467]",
    green: "bg-[#E6F7EE] text-[#0E7A3F]",
    amber: "bg-[#FFF4E0] text-[#A0590B]",
    red: "bg-[#FDECEC] text-[#B42318]",
  };
  return <span className={`inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full ${tones[tone]}`}>{children}</span>;
};

export const DockStepCameras = () => (
  <Panel>
    <h4 className="font-semibold text-sm mb-1 flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#3A6CC9]" /> Add dock cameras</h4>
    <p className="text-[11px] text-[#666] mb-3">Point existing CCTV at each dock door. We auto-calibrate door zones.</p>
    <div className="grid grid-cols-4 gap-1.5">
      {Array.from({ length: 12 }).map((_, i) => {
        const states = ["green", "amber", "blue", "green", "green", "amber", "green", "blue", "amber", "green", "green", "blue"] as const;
        const labels = ["Door 1", "Door 2", "Door 3", "Door 4", "Door 5", "Door 6", "Door 7", "Door 8", "Door 9", "Door 10", "Door 11", "Door 12"];
        const colors: Record<string, string> = {
          green: "bg-[#E6F7EE] border-[#0E7A3F]",
          amber: "bg-[#FFF4E0] border-[#A0590B]",
          blue: "bg-[#E8F0FF] border-[#002467]",
        };
        return (
          <div key={i} className={`rounded-md p-1.5 border text-center ${colors[states[i]]}`}>
            <div className="text-[10px] font-semibold">{labels[i]}</div>
            <div className="text-[8px] text-[#666]">RTSP OK</div>
          </div>
        );
      })}
    </div>
    <div className="mt-3 text-[10px] text-[#666]">12 of 12 doors connected · auto-calibration complete</div>
  </Panel>
);

export const DockStepIntegrate = () => (
  <Panel>
    <h4 className="font-semibold text-sm mb-1 flex items-center gap-1.5"><Plug className="w-4 h-4 text-[#3A6CC9]" /> Connect your WMS / YMS / ERP</h4>
    <p className="text-[11px] text-[#666] mb-3">Dock events flow into the systems your operations team already uses.</p>
    <div className="space-y-2">
      {[
        { name: "SAP EWM", desc: "Extended warehouse management", tone: "green" as const, status: "Connected" },
        { name: "Manhattan Active", desc: "WMS / YMS suite", tone: "green" as const, status: "Connected" },
        { name: "Blue Yonder TMS", desc: "Transportation management", tone: "amber" as const, status: "Awaiting key" },
      ].map((p) => (
        <div key={p.name} className="flex items-center justify-between rounded-lg border border-[#E6ECF5] p-2">
          <div>
            <div className="font-semibold text-[11px]">{p.name}</div>
            <div className="text-[10px] text-[#666]">{p.desc}</div>
          </div>
          <Pill tone={p.tone}>{p.status}</Pill>
        </div>
      ))}
    </div>
  </Panel>
);

export const DockStepDetect = () => (
  <Panel>
    <h4 className="font-semibold text-sm mb-1 flex items-center gap-1.5"><Eye className="w-4 h-4 text-[#3A6CC9]" /> Trailer & door events (live)</h4>
    <p className="text-[11px] text-[#666] mb-3">Arrival → dock → load → depart, timestamped per event with evidence.</p>
    <div className="rounded-lg overflow-hidden border border-[#E6ECF5] mb-3">
      <img src={dockImg} alt="" className="w-full h-36 object-cover" loading="lazy" />
    </div>
    <div className="grid grid-cols-4 gap-1.5">
      {[
        { label: "Active doors", value: "8/12" },
        { label: "Utilization", value: "67%" },
        { label: "Avg dwell", value: "47m" },
        { label: "Delays >1h", value: "2" },
      ].map((k) => (
        <div key={k.label} className="rounded-lg border border-[#E6ECF5] p-1.5 text-center">
          <div className="text-sm font-bold text-[#002467]">{k.value}</div>
          <div className="text-[9px] text-[#666] truncate">{k.label}</div>
        </div>
      ))}
    </div>
  </Panel>
);

export const DockStepPush = () => (
  <Panel>
    <h4 className="font-semibold text-sm mb-1 flex items-center gap-1.5"><ArrowRightLeft className="w-4 h-4 text-[#3A6CC9]" /> Push events to your WMS / YMS</h4>
    <p className="text-[11px] text-[#666] mb-3">Each event auto-creates / updates the matching record in your platform.</p>
    <div className="space-y-2">
      {[
        { sev: "red" as const, title: "Trailer T-2247 · 2h 14m dwell at Door 4", platform: "→ SAP EWM (Detention alert #DET-118)" },
        { sev: "amber" as const, title: "Door 7 idle 38m between trailers", platform: "→ Manhattan (Utilization event)" },
        { sev: "blue" as const, title: "Trailer T-2251 departed Door 2 · 09:48", platform: "→ Blue Yonder TMS (Ship-confirm)" },
      ].map((a) => (
        <div key={a.title} className="rounded-lg border border-[#E6ECF5] p-2">
          <div className="flex items-center gap-2 mb-1">
            <Pill tone={a.sev}>{a.sev === "red" ? "Critical" : a.sev === "amber" ? "Warning" : "Info"}</Pill>
            <span className="font-semibold text-[11px] truncate">{a.title}</span>
          </div>
          <div className="text-[10px] text-[#0E7A3F] flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> {a.platform}</div>
        </div>
      ))}
    </div>
  </Panel>
);

export const DockStepDashboard = () => (
  <Panel>
    <h4 className="font-semibold text-sm mb-1 flex items-center gap-1.5"><BarChart3 className="w-4 h-4 text-[#3A6CC9]" /> Operations dashboard</h4>
    <p className="text-[11px] text-[#666] mb-3">Utilization, dwell, bottlenecks — with the video clip behind every metric.</p>
    <div className="grid grid-cols-4 gap-1.5 mb-3">
      {[
        { label: "Dock utilization", value: "67%", tone: "text-[#002467]" },
        { label: "Avg trailer dwell", value: "47m", tone: "text-[#A0590B]" },
        { label: "Delays >1h (7d)", value: "9", tone: "text-[#B42318]" },
        { label: "On-time depart", value: "92%", tone: "text-[#0E7A3F]" },
      ].map((k) => (
        <div key={k.label} className="rounded-lg border border-[#E6ECF5] p-2 text-center">
          <div className={`text-sm font-bold ${k.tone}`}>{k.value}</div>
          <div className="text-[9px] text-[#666] truncate">{k.label}</div>
        </div>
      ))}
    </div>
    <div className="rounded-lg border border-[#E6ECF5] p-2">
      <div className="text-[10px] font-semibold mb-1.5">Door utilization (today)</div>
      {[
        { label: "Door 4", w: 92 },
        { label: "Door 7", w: 38 },
        { label: "Door 2", w: 81 },
        { label: "Door 9", w: 54 },
      ].map((r) => (
        <div key={r.label} className="flex items-center gap-2 mb-1">
          <span className="text-[10px] text-[#444] w-16 truncate">{r.label}</span>
          <div className="flex-1 h-1.5 bg-[#E6ECF5] rounded-full overflow-hidden">
            <div className="h-full bg-[#3A6CC9] rounded-full" style={{ width: `${r.w}%` }} />
          </div>
          <span className="text-[10px] text-[#444] w-8 text-right">{r.w}%</span>
        </div>
      ))}
    </div>
  </Panel>
);

export const DockStepClose = () => (
  <Panel>
    <h4 className="font-semibold text-sm mb-1 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#3A6CC9]" /> Resolve disputes & optimise</h4>
    <p className="text-[11px] text-[#666] mb-3">Timestamped video evidence settles carrier disputes; insights drive scheduling changes.</p>
    <div className="space-y-2">
      {[
        { id: "DET-118", title: "Carrier dispute (Trailer T-2247) — evidence attached", status: "Resolved", tone: "green" as const },
        { id: "BN-204", title: "Bottleneck: Door 4 sequencing — rescheduled", status: "Implemented", tone: "green" as const },
        { id: "UT-061", title: "Underutilised Door 11 — reassigned to high-volume lane", status: "Pending", tone: "amber" as const },
      ].map((a) => (
        <div key={a.id} className="flex items-center justify-between rounded-lg border border-[#E6ECF5] p-2">
          <div className="min-w-0">
            <div className="text-[10px] text-[#666]">{a.id}</div>
            <div className="font-semibold text-[11px] truncate">{a.title}</div>
          </div>
          <Pill tone={a.tone}>{a.status}</Pill>
        </div>
      ))}
    </div>
  </Panel>
);
