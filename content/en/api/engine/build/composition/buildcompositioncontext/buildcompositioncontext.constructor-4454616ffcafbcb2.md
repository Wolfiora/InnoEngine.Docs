---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4454616ffcafbcb2a892ea394890970981caa4d0d8f9e7e7558823645c71732e
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildCompositionContext.#ctor(System.String,System.String,Inno.Build.Toolchains.BuildHostDescriptor,Inno.Build.BuildTargetID,System.String)
title: BuildCompositionContext.Constructor
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
sourceFingerprint: 38449b41a531077ee61fa7f0630426becf13cadc7ede03916eff588eca426f65
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
