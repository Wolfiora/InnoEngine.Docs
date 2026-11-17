---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3931acfb4ea1883652ce93d97d2b7cb6349801a175ebd5cdee7d5f97c2c1a532
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioContentProviderContext.#ctor(InnoEngine.References.ContentReadScope,System.Single,System.Int32)
title: AudioContentProviderContext.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
reviewed: 14d00f59093dc2c2d92625a48e8c62763013c86ba22c4b50c1fb2de7bca96cc2
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `content`:** The caller-owned identity read scope.

**Parameter `deltaTime`:** Finite non-negative time elapsed since the previous update.

**Parameter `capacity`:** Maximum combined emitter and listener count accepted by this contribution. Zero permits an empty contribution only.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The elapsed time is invalid or capacity is negative.

**Exception `T:System.ArgumentNullException`:** The borrowed content scope is null.
