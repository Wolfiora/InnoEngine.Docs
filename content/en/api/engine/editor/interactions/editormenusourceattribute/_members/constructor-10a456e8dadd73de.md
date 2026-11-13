---
uid: api.10a456e8dadd73de334227484c06c6ca63b5ecf95f0d710b79829a2c2c06f6a6
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorMenuSourceAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: b22270394445359deabab7bbfd8f6db8491b6dcfc87a1090a326eadf1714c77c
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates a dynamic menu-source registration for an exact interaction surface.

**Parameter `area`:** The exact menu area that receives placements from the source.

**Parameter `priority`:** The ordering priority used when multiple dynamic sources contribute to the surface.

**Exception `T:System.ArgumentException`:** Thrown when `area` is empty.
