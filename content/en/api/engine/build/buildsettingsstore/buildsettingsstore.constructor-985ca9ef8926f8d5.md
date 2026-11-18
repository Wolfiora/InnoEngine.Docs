---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.985ca9ef8926f8d55d171975d0e835cb681471ba6b556e24dddad2d0d83c2bdf
symbol: engine:Inno.Build:M:Inno.Build.BuildSettingsStore.#ctor(System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Build.BuildSettings)
title: BuildSettingsStore.Constructor
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: 52313b3e14997303719d7d051a7cccbaf50510e031e7971d8430336cca47ac47
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
