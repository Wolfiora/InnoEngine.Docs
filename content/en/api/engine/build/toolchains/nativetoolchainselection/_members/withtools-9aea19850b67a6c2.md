---
uid: api.9aea19850b67a6c25512413aceaea327867ed1636f0a75859323b643f93e33b8
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeToolchainSelection.WithTools(System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IEnumerable{System.String})"
source: xml
reviewed: d7fa28f78a875f48dc232c5fa7071a7b7a3cc4eb4ae51be7725cb43f6bcdede2
title: "WithTools"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Adds integration-owned tools without changing the platform SDK or replacing existing commands.

**Parameter `tools`:** Explicit absolute executables required by the selected backend integration.

**Parameter `inputs`:** Integration implementation and configuration files participating in tool selection.

**Returns:** A new immutable selection containing both the platform and integration inputs.

**Exception `T:System.ArgumentException`:** A contribution conflicts with an already selected command.

**Exception `T:System.IO.FileNotFoundException`:** A contributed tool or input does not exist.
