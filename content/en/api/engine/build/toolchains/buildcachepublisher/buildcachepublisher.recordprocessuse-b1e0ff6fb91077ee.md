---
uid: api.b1e0ff6fb91077eedff577c805846fce3099690ee99bdbc6139dbbabde405037
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.RecordProcessUse(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.Threading.CancellationToken)"
source: xml
reviewed: fca5edeb2d29e496b0c0b9ac8f2a5a5c938545766a27b098019d1e1b0abe83d6
title: "BuildCachePublisher.RecordProcessUse"
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
