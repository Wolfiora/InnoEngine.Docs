---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.build.composition.ad995aebfba1a445
symbol: engine:Inno.Build.Composition:T:Inno.Build.Composition.GameContentCompilerFactory
title: GameContentCompilerFactory
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
reviewed: 27dcdf728dc5f32d6c3f4fab4e61cd1fb210b178ca8bd03a5aeec7d4252db769
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
