---
uid: api.0999e8f188a0b5ffa8d13ef4f3d4a121f1e00a2b48d837f063d752f27771a4db
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildFingerprint.Create(Inno.Build.Toolchains.NativeBuildContext,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeBuildInput},System.Threading.CancellationToken)"
source: xml
reviewed: 8c5d77d9176417f44808754b70669f306ddbdf190905d8b4a03a4a90e09645d9
title: "Create"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Hashes declarations using the current operation's initial snapshot or explicit fresh verification phase.

**Parameter `context`:** The owner of this phase's complete input inventory and content hashes.

**Parameter `declarations`:** Ordered non-file inputs; declaration order remains significant.

**Parameter `inputs`:** Complete inputs with stable logical identities and physical read locations.

**Parameter `cancellationToken`:** Cancels complete enumeration and hashing.

**Returns:** The SHA-256 identity; repeated physical reads within this phase are reused.
