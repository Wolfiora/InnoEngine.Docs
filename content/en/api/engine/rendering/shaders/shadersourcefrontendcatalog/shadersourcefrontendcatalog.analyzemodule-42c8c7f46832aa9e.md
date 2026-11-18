---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.42c8c7f46832aa9edb3f840aa9e2a8b187ed427b67f452510c4693098feeda76
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceFrontendCatalog.AnalyzeModule(System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceImplementationRequest})
title: ShaderSourceFrontendCatalog.AnalyzeModule
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: a80d5c4e74555cec918dfb2fb65daa421ac8cbe46fcf940d24ce01de4f60f7a3
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
