---
uid: api.7c3066e8314df9decc5d4e351580b8b173c7d29ce2138b458c1d9a102d5967a9
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorViewportFocusBounds.#ctor(Inno.Core.Mathematics.Vector3,System.Single)"
source: xml
reviewed: e38260f73e69b630d6a5adbfb99b226fa496eadc6e688c17e25f6c4380206307
title: "Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Creates a finite focus bound.

**Parameter `center`:** World-space focus center.

**Parameter `radius`:** Non-negative world-space radius.

**Exception `T:System.ArgumentException`:** Thrown when the center contains a non-finite value.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when the radius is negative or non-finite.
