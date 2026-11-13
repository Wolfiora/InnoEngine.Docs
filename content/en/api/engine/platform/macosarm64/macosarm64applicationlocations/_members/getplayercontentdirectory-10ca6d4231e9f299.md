---
uid: api.10ca6d4231e9f299ff35fd198d09d6b9ec4f8eae4ee4c2b2b8e487e576d86903
symbol: "engine:Inno.Platform.MacOSArm64:M:Inno.Platform.MacOSArm64.MacOSArm64ApplicationLocations.GetPlayerContentDirectory(System.String)"
source: xml
reviewed: a68705cdca22105a31200478c52b0258e163410e7f788d2ee30367abe2d822d5
title: "GetPlayerContentDirectory"
kind: api
owners: [Inno.Platform.MacOSArm64]
apiSurface: source-clr
---

Resolves the sole content location in a published MacOS application layout.

**Parameter `applicationDirectory`:** The absolute product executable directory.

**Returns:** The explicit content directory, without probing alternative layouts.

**Exception `T:System.ArgumentException`:** The application directory is empty or relative.
