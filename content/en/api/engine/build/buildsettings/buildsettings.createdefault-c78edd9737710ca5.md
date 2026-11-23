---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c78edd9737710ca5567cffb982e77cc226a0dd1e54deb7884588ec7aaa045a3e
symbol: engine:Inno.Build:M:Inno.Build.BuildSettings.CreateDefault(System.String,System.String,Inno.Build.BuildTargetID)
title: BuildSettings.CreateDefault
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: 7bb0229867ce7b423fad0009a029395c84e7b785bba7e94a8cb38a30f4c036d3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `projectName`:** The project directory name used for initial labels and output paths.

**Parameter `startupScene`:** The initial mount-qualified startup Scene, or an empty value when unavailable.

**Parameter `target`:** The host-appropriate initial build target.

## Returns

A newly owned build settings object.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `projectName` is empty or `target` is invalid.
