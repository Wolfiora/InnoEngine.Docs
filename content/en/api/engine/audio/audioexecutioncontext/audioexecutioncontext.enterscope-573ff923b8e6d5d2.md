---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.573ff923b8e6d5d2ce022f12f9513471d89915518a43b38d921492d9b472d0e9
symbol: engine:Inno.Audio:M:Inno.Audio.AudioExecutionContext.EnterScope(Inno.Audio.IAudioService)
title: AudioExecutionContext.EnterScope
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 0cbcd7cd4709039b9f5b709d215bab8b18c7b80d610860dbadefdd3303a8047a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `audio`:** Host-owned audio service exposed to script-facing operations.

## Returns

A strict last-in-first-out scope owned by the caller.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `audio` is `null`.
