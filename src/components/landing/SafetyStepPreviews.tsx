/**
 * Product mock previews for the Industrial Safety How-It-Works flow.
 * These are React components (not images) so they render crisp on any
 * screen and use the NAVA brand tokens consistently.
 */
import { Camera, Plug, Eye, ArrowRightLeft, BarChart3, CheckCircle2 } from "lucide-react";
import cctvImg from "@/assets/Images/landing/cctv-bounding-boxes.png";

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

export const StepCameras = () => (
  <Panel>
    <h4 className="font-semibold text-sm mb-1 flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#3A6CC9]" /> Add cameras</h4>
    <p className="text-[11px] text-[#666] mb-3">Connect existing CCTV. No new hardware.</p>
    <div className="grid grid-cols-2 gap-2 mb-3">
      {[
        { label: "Filling Line A", rtsp: "rtsp://10.1.0.21/stream1", state: "green" as const, status: "Connected" },
        { label: "Packaging B", rtsp: "rtsp://10.1.0.22/stream1", state: "green" as const, status: "Connected" },
        { label: "Loading Dock", rtsp: "rtsp://10.1.0.23/stream1", state: "amber" as const, status: "Calibrating" },
        { label: "Forklift Lane", rtsp: "rtsp://10.1.0.24/stream1", state: "green" as const, status: "Connected" },
      ].map((c) => (
        <div key={c.label} className="rounded-lg border border-[#E6ECF5] p-2">
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold text-[11px]">{c.label}</span>
            <Pill tone={c.state}>{c.status}</Pill>
          </div>
          <code className="text-[9px] text-[#666] truncate block">{c.rtsp}</code>
        </div>
      ))}
    </div>
    <button className="text-[10px] font-semibold border border-[#3A6CC9] text-[#3A6CC9] rounded px-2 py-1">+ Add RTSP camera</button>
  </Panel>
);

export const StepIntegrate = () => (
  <Panel>
    <h4 className="font-semibold text-sm mb-1 flex items-center gap-1.5"><Plug className="w-4 h-4 text-[#3A6CC9]" /> Connect your EHS / ERP</h4>
    <p className="text-[11px] text-[#666] mb-3">One-click API key. Incidents and corrective actions flow both ways.</p>
    <div className="space-y-2">
      {[
        { name: "Intelex", desc: "Workplace safety platform", state: "green" as const, status: "Connected" },
        { name: "SAP EHS", desc: "Enterprise EHS module", state: "green" as const, status: "Connected" },
        { name: "SafetyCulture", desc: "Inspections & corrective actions", state: "amber" as const, status: "Awaiting key" },
      ].map((p) => (
        <div key={p.name} className="flex items-center justify-between rounded-lg border border-[#E6ECF5] p-2">
          <div>
            <div className="font-semibold text-[11px]">{p.name}</div>
            <div className="text-[10px] text-[#666]">{p.desc}</div>
          </div>
          <Pill tone={p.state}>{p.status}</Pill>
        </div>
      ))}
    </div>
  </Panel>
);

export const StepDetect = () => (
  <Panel>
    <h4 className="font-semibold text-sm mb-1 flex items-center gap-1.5"><Eye className="w-4 h-4 text-[#3A6CC9]" /> Vision AI detection (live)</h4>
    <p className="text-[11px] text-[#666] mb-3">Bounding-box detection on every frame, with timestamped video evidence.</p>
    <div className="rounded-lg overflow-hidden border border-[#E6ECF5] mb-3">
      <img src={cctvImg} alt="" className="w-full h-36 object-cover" loading="lazy" />
    </div>
    <div className="grid grid-cols-3 gap-2">
      <div className="rounded-lg border border-[#E6ECF5] p-2 text-center">
        <div className="text-base font-bold text-[#B42318]">3</div>
        <div className="text-[9px] text-[#666]">Near-miss</div>
      </div>
      <div className="rounded-lg border border-[#E6ECF5] p-2 text-center">
        <div className="text-base font-bold text-[#A0590B]">2</div>
        <div className="text-[9px] text-[#666]">Zone violation</div>
      </div>
      <div className="rounded-lg border border-[#E6ECF5] p-2 text-center">
        <div className="text-base font-bold text-[#002467]">1</div>
        <div className="text-[9px] text-[#666]">PPE gap</div>
      </div>
    </div>
  </Panel>
);

export const StepPush = () => (
  <Panel>
    <h4 className="font-semibold text-sm mb-1 flex items-center gap-1.5"><ArrowRightLeft className="w-4 h-4 text-[#3A6CC9]" /> Push incidents + evidence</h4>
    <p className="text-[11px] text-[#666] mb-3">Auto-creates observations / near-miss reports / corrective actions in your EHS platform.</p>
    <div className="space-y-2">
      {[
        { sev: "Critical" as const, title: "Forklift–pedestrian near-miss · Lane 3", platform: "→ Intelex (Near-Miss Report #INX-4821)" },
        { sev: "High" as const, title: "PPE missing · Filling Line A · 14:22", platform: "→ SAP EHS (Observation #SE-0993)" },
        { sev: "Medium" as const, title: "Restricted zone entered · Cell R2", platform: "→ SafetyCulture (Action #SC-2147)" },
      ].map((a) => (
        <div key={a.title} className="rounded-lg border border-[#E6ECF5] p-2">
          <div className="flex items-center gap-2 mb-1">
            <Pill tone={a.sev === "Critical" ? "red" : a.sev === "High" ? "amber" : "blue"}>{a.sev}</Pill>
            <span className="font-semibold text-[11px]">{a.title}</span>
          </div>
          <div className="text-[10px] text-[#0E7A3F] flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> {a.platform}</div>
        </div>
      ))}
    </div>
  </Panel>
);

export const StepDashboard = () => (
  <Panel>
    <h4 className="font-semibold text-sm mb-1 flex items-center gap-1.5"><BarChart3 className="w-4 h-4 text-[#3A6CC9]" /> NAVA Vision AI dashboard</h4>
    <p className="text-[11px] text-[#666] mb-3">Audit-ready visibility into PPE compliance, near-miss trends, hotspots.</p>
    <div className="grid grid-cols-4 gap-2 mb-3">
      {[
        { label: "PPE compliance", value: "94%", tone: "text-[#0E7A3F]" },
        { label: "Near-miss / 7d", value: "12", tone: "text-[#A0590B]" },
        { label: "Zone events", value: "8", tone: "text-[#B42318]" },
        { label: "Actions open", value: "5", tone: "text-[#002467]" },
      ].map((k) => (
        <div key={k.label} className="rounded-lg border border-[#E6ECF5] p-2 text-center">
          <div className={`text-base font-bold ${k.tone}`}>{k.value}</div>
          <div className="text-[9px] text-[#666] truncate">{k.label}</div>
        </div>
      ))}
    </div>
    <div className="rounded-lg border border-[#E6ECF5] p-2">
      <div className="text-[10px] font-semibold mb-1.5">Risk hotspots</div>
      {[
        { label: "Loading Dock", w: 88 },
        { label: "Filling Line A", w: 64 },
        { label: "Forklift Lane 3", w: 52 },
        { label: "Packaging B", w: 30 },
      ].map((r) => (
        <div key={r.label} className="flex items-center gap-2 mb-1">
          <span className="text-[10px] text-[#444] w-24 truncate">{r.label}</span>
          <div className="flex-1 h-1.5 bg-[#E6ECF5] rounded-full overflow-hidden">
            <div className="h-full bg-[#3A6CC9] rounded-full" style={{ width: `${r.w}%` }} />
          </div>
        </div>
      ))}
    </div>
  </Panel>
);

export const StepClose = () => (
  <Panel>
    <h4 className="font-semibold text-sm mb-1 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#3A6CC9]" /> Close the loop</h4>
    <p className="text-[11px] text-[#666] mb-3">Action status syncs back from your EHS platform so trends update in real time.</p>
    <div className="space-y-2">
      {[
        { id: "INX-4821", title: "Install convex mirror — Lane 3 blind corner", status: "Completed", tone: "green" as const },
        { id: "SE-0993", title: "PPE refresher training — Line A operators", status: "In Progress", tone: "amber" as const },
        { id: "SC-2147", title: "Add barrier — Cell R2 perimeter", status: "Open", tone: "blue" as const },
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
