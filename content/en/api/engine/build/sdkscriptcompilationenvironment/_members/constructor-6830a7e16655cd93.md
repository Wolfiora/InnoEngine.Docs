---
uid: api.6830a7e16655cd939cbb0185b94c8f8e6fdcf2535caff34df690d24680b15830
symbol: "engine:Inno.Build:M:Inno.Build.SdkScriptCompilationEnvironment.#ctor(System.String,System.String)"
source: xml
reviewed: a3b52c2660955023e71b007a71420c52b4b907bea76d775207c8d14db8ef6e49
title: "Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates a host-owned input provider without selecting installed reference packs independently.

**Parameter `dotnetHost`:** The .NET host executable selected by the composition root.

**Parameter `projectRoot`:** The authoring project whose ancestor SDK configuration governs compilation and IDE use.

**Exception `T:System.ArgumentException`:** A host or project location is empty.
