---
uid: api.909a500b1e30568330ca62b2b40059e3ec6fb166d21c4b146701a4cf04ae2c0a
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.DotNetSdkResolver.ResolveAsync(System.String,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: e8c1e545191db4eceec00e8b7a88855fc1b15407913517d2f618c8f5d9718060
title: "ResolveAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Asks the selected host to resolve its SDK from the project location without guessing installed versions.

**Parameter `hostPath`:** The .NET executable selected by the build composition root.

**Parameter `projectPath`:** The prepared entry project whose directory controls SDK selection.

**Parameter `cancellationToken`:** Cancels SDK discovery and drains its child process.

**Returns:** The exact project-selected SDK, managed entry assembly and host; missing SDKs fail explicitly.

**Exception `T:System.IO.FileNotFoundException`:** The selected host, prepared entry project or selected SDK entry assembly does not exist.

**Exception `T:System.InvalidOperationException`:** The selected host cannot resolve a valid SDK identity and absolute base path.
