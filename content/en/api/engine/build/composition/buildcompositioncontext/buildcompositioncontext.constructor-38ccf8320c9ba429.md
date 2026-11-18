---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.38ccf8320c9ba429fab9004fbd267d76e03cdd3dee320de88078bb06feaaa2a2
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildCompositionContext.#ctor(System.String,System.String,Inno.Build.Toolchains.BuildHostDescriptor,Inno.Build.BuildTargetId)
title: BuildCompositionContext.Constructor
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
sourceFingerprint: cd32d1d8dc2059fa65a324b313437ee715f90c2e36659e8e6e7ca0da1bf9a51d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `dotnetHost`:** The SDK executable selected by the host, either an executable path or a command name.

**Parameter `applicationDirectory`:** The absolute directory from which source-based Support Pack provisioning can be resolved.

**Parameter `host`:** The explicitly declared tool execution machine, independent of any publication target.

**Parameter `toolsTarget`:** The explicit native target of tools executed by this composition, independent of game publication.

## Exceptions

**Exception `T:System.ArgumentException`:** The SDK command is blank or the application directory is not absolute.
