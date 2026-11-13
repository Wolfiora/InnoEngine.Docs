---
uid: api.985ca9ef8926f8d55d171975d0e835cb681471ba6b556e24dddad2d0d83c2bdf
symbol: "engine:Inno.Build:M:Inno.Build.BuildSettingsStore.#ctor(System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Build.BuildSettings)"
source: xml
reviewed: 8d94831bc0673e6ff26cdc2a04778a8282b7c4977ed3bb5f4510b59345c1e59d
title: "Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates a store for one project's current build settings document.

**Parameter `path`:** The project-owned `Settings.Build.inno` path.

**Parameter `serialization`:** The active engine serialization registry.

**Parameter `defaultSettings`:** Canonical project defaults used while no document exists.

**Exception `T:System.ArgumentException`:** Thrown when `path` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `serialization` or `defaultSettings` is null.
