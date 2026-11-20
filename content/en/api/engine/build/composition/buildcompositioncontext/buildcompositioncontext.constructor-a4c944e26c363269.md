---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a4c944e26c363269f8d4634944ffd1d5478b335ff3a84f04a91b20cebc2ec11c
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildCompositionContext.#ctor(System.String,System.String,Inno.Build.Toolchains.BuildHostDescriptor,Inno.Build.BuildTargetId,System.String)
title: BuildCompositionContext.Constructor
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
sourceFingerprint: 71e4981a425e6ba1e1139415abaed72ca622e0d8cfc1ec754ba58c06fccba6f7
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

**Parameter `nativeDependencies`:** An absolute dependency selection forbidding third-party production, or null for local source builds.

## Exceptions

**Exception `T:System.ArgumentException`:** The SDK command is blank or the application directory is not absolute.
