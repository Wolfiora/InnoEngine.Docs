---
uid: api.6830a7e16655cd939cbb0185b94c8f8e6fdcf2535caff34df690d24680b15830
symbol: "engine:Inno.Build:M:Inno.Build.SdkScriptCompilationEnvironment.#ctor(System.String,System.String)"
source: xml
reviewed: 7f1615ad873d2f08b7b193ecf2e91285b5dfec3ad7f570f55e3c12d47dc27b32
title: "Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates a host-owned input provider without selecting installed reference packs independently.

**Parameter `dotnetHost`:** The .NET host executable selected by the composition root.

**Parameter `projectRoot`:** The authoring project whose ancestor SDK configuration governs compilation and IDE use.

**Exception `T:System.ArgumentException`:** A host or project location is empty.
