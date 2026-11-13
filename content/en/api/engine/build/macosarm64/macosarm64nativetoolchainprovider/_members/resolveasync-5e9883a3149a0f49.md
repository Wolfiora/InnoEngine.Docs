---
uid: api.5e9883a3149a0f499d845f310f9ae30a6d5dd73ddeb873217cc46c38aa1924d5
symbol: "engine:Inno.Build.MacOSArm64:M:Inno.Build.MacOSArm64.MacOSArm64NativeToolchainProvider.ResolveAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.BuildHostDescriptor,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: f3f4cdd6b6a3acba05cbf95663d377a1fbec46602dea4237623c3404370e7aee
title: "ResolveAsync"
kind: api
owners: [Inno.Build.MacOSArm64]
apiSurface: source-clr
---

Freezes compiler tools, SDK inputs and child environment before a native operation starts.

**Parameter `context`:** The checkout and configuration owned by the requesting operation.

**Parameter `host`:** The explicitly declared execution host, independent of the target.

**Parameter `targetId`:** The exact requested target; unsupported combinations must fail.

**Parameter `cancellationToken`:** Cancels SDK discovery before any product staging.

**Returns:** A complete immutable tool selection for the requested host and target.
