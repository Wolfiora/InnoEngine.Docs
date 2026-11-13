---
uid: api.inno.build.composition.ad995aebfba1a445
symbol: "engine:Inno.Build.Composition:T:Inno.Build.Composition.GameContentCompilerFactory"
source: xml
reviewed: c9c9120bdebf46f0fef2b97d95808ac9ab64e59e1475ba38045eb14725f2abd1
title: "GameContentCompilerFactory"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
contracts:
- project.inno-build-composition
aliases: []
---

Creates a content compiler borrowing the active authoring services for one pipeline.

**Parameter `assets`:** The asset owner whose content the build freezes.

**Parameter `serialization`:** The matching serialization registry; ownership remains with the host.

**Parameter `types`:** The matching extension catalog; the compiler must not outlive its pipeline.

**Returns:** A non-null scoped compiler that never disposes or globally retains these services.
