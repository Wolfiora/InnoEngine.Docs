---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.985ca9ef8926f8d55d171975d0e835cb681471ba6b556e24dddad2d0d83c2bdf
symbol: engine:Inno.Build:M:Inno.Build.BuildSettingsStore.#ctor(System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Build.BuildSettings)
title: BuildSettingsStore.Constructor
kind: api
owners:
- Inno.Build
apiSurface: source-clr
reviewed: c8228eed63c2f5a17e0db0b7d82a6dcf517d0bcaf86c3ef4ce3c5beb39b814b6
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The project-owned `Settings.Build.inno` path.

**Parameter `serialization`:** The active engine serialization registry.

**Parameter `defaultSettings`:** Canonical project defaults used while no document exists.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `path` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `serialization` or `defaultSettings` is null.
