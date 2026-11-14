---
uid: api.9031905516428b31face493d0ae0b972c65f3af58615b745ff5ccbf3c3f9f87d
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.#ctor(System.String,Inno.Build.Toolchains.BuildCacheArtifactRole)"
source: xml
reviewed: 38fc8fff286e616d64ee5716a5897cd8f6dce4941a1714c273dd96f20af1497c
title: "BuildCachePublisher.Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Creates a publisher for one absolute, non-overlapping cache boundary.

## Parameters

**Parameter `directory`:** The cache root exclusively controlled by this publisher.

**Parameter `role`:** The lifetime declared for this publisher's completed entries.

## Exceptions

**Exception `T:System.ArgumentException`:** The directory is blank or relative.
