---
uid: api.3a11dcf92ba1cc39f8d70553a995aa81c6219e70a884ab7966bcceed92e89fef
symbol: "engine:Inno.Build.BrowserWasm32:M:Inno.Build.BrowserWasm32.EmscriptenNativeToolchainProvider.ResolveAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.BuildHostDescriptor,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 8f93ebdc92cc55e7bed66f4495c2b2c540acb89d3918eba22d659e206ad134d6
title: "ResolveAsync"
kind: api
owners: [Inno.Build.BrowserWasm32]
apiSurface: source-clr
---

Freezes compiler tools, SDK inputs and child environment before a native operation starts.

**Parameter `context`:** The checkout and configuration owned by the requesting operation.

**Parameter `host`:** The explicitly declared execution host, independent of the target.

**Parameter `targetId`:** The exact requested target; unsupported combinations must fail.

**Parameter `cancellationToken`:** Cancels SDK discovery before any product staging.

**Returns:** A complete immutable tool selection for the requested host and target.
