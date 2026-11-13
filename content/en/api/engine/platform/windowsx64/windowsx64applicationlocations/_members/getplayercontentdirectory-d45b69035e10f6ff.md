---
uid: api.d45b69035e10f6ff4007285a6a8e562b8503dab8ff47a6bde01a7b6b7dab6e0c
symbol: "engine:Inno.Platform.WindowsX64:M:Inno.Platform.WindowsX64.WindowsX64ApplicationLocations.GetPlayerContentDirectory(System.String)"
source: xml
reviewed: 0a89f15e04744184ec0c5c5912388981a1ceff0e9ef3b56ed956fffd65f1eb0b
title: "GetPlayerContentDirectory"
kind: api
owners: [Inno.Platform.WindowsX64]
apiSurface: source-clr
---

Resolves the sole content location in a published Windows application layout.

**Parameter `applicationDirectory`:** The absolute product executable directory.

**Returns:** The explicit content directory, without probing alternative layouts.

**Exception `T:System.ArgumentException`:** The application directory is empty or relative.
