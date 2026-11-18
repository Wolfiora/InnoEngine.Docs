---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7c3066e8314df9decc5d4e351580b8b173c7d29ce2138b458c1d9a102d5967a9
symbol: engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorViewportFocusBounds.#ctor(Inno.Core.Mathematics.Vector3,System.Single)
title: EditorViewportFocusBounds.Constructor
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: source-clr
sourceFingerprint: a4590448e3c6621865e5e5ea58e3df365a2fde36f1d7c99dc0fbc9e550105315
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `center`:** World-space focus center.

**Parameter `radius`:** Non-negative world-space radius.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when the center contains a non-finite value.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when the radius is negative or non-finite.
