---
uid: api.5033115aa0e0b4ea5179025053b9d13f2258c95c3b463372f690c8b2024c089d
symbol: "scripting:Inno.Animation:M:InnoEngine.Animation.AnimationTarget.#ctor(InnoEngine.Core.Identity)"
source: xml
reviewed: 41c1c635b73f9bb65141999c8ad21c982e6ff4bde262cd31f6cad5ae83fabb7a
title: "AnimationTarget.Constructor"
kind: api
owners: [Inno.Animation]
apiSurface: editor-script
apiScope: Runtime
---

Captures one currently registered destination in its original identity domain.

## Parameters

**Parameter `identity`:** The destination's live identity, not a detached persistent identifier.

## Exceptions

**Exception `T:System.ArgumentException`:** The identity is not registered.
