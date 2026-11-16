---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.42c8c7f46832aa9edb3f840aa9e2a8b187ed427b67f452510c4693098feeda76
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceFrontendCatalog.AnalyzeModule(System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceImplementationRequest})
title: ShaderSourceFrontendCatalog.AnalyzeModule
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 9ee15a65222d7a0073f4442a93f831ce1d8cd78f17ce4bf8b945e8fa89725b4c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `implementations`:** Explicit implementation/configuration candidates; no native-code translation is attempted.

## Returns

Frozen source inputs and a common interface, or recoverable missing/interface diagnostics.

## Exceptions

**Exception `T:System.ArgumentException`:** The candidate list is empty or contains null or duplicate implementation IDs.
