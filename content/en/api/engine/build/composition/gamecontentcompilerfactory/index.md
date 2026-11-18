---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.build.composition.ad995aebfba1a445
symbol: engine:Inno.Build.Composition:T:Inno.Build.Composition.GameContentCompilerFactory
title: GameContentCompilerFactory
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
sourceFingerprint: 848961cd3a24dd0b0b71696d6f20bdbefd27315c05c22b87ed66253dfe27efe3
contracts:
- project.inno-build-composition

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `assets`:** The asset owner whose content the build freezes.

**Parameter `serialization`:** The matching serialization registry; ownership remains with the host.

**Parameter `types`:** The matching extension catalog; the compiler must not outlive its pipeline.

## Returns

A non-null scoped compiler that never disposes or globally retains these services.
