---
uid: api.b1e0ff6fb91077eedff577c805846fce3099690ee99bdbc6139dbbabde405037
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.RecordProcessUse(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.Threading.CancellationToken)"
source: xml
reviewed: 9ee885afa721cb0bea5b793963ddb3a1b0cb8d930f1e06b9ff7f2083addd1f63
title: "RecordProcessUse"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Registers a process-owned loader directory and its dependencies before returning it to a loader. Retirement preserves the directory until every recorded process has exited. Repeated registrations retain the complete dependency closure of that process-owned operation.

**Parameter `directory`:** The completed directory within this publisher's boundary.

**Parameter `leasePath`:** The persistent producer and retirement lease outside the directory.

**Parameter `dependencies`:** Owned generations and workspaces required throughout this process-owned operation.

**Parameter `cancellationToken`:** Cancels ownership acquisition before the process claim is recorded.

**Exception `T:System.IO.IOException`:** The directory escapes ownership or its registration cannot be written.

**Exception `T:System.OperationCanceledException`:** Ownership acquisition was canceled.
