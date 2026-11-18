---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fc7a569bb4fd5ee66411862c93c749cf1f24f460de09223c50d87f9eb8056591
symbol: engine:Inno.Build:M:Inno.Build.BuildProgress.#ctor(System.String,System.Double,System.String)
title: BuildProgress.Constructor
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: ee90e9001ab68fcf2d15d7bcbc1c01757388ec0aef3d69a7cdcb620ce461860a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `stage`:** The stable build stage name.

**Parameter `fraction`:** The completed fraction in the inclusive range from zero to one.

**Parameter `message`:** A concise human-readable status message.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when stage or message is empty.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when fraction is outside the supported range.
