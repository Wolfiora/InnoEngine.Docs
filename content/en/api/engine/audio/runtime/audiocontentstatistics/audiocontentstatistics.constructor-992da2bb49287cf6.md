---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.992da2bb49287cf677ac100ec89b1f713f338092928d6ad343fef4ff71149130
symbol: engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioContentStatistics.#ctor(System.Int32,System.Int32,System.Int32)
title: AudioContentStatistics.Constructor
kind: api
owners:
- Inno.Audio.Runtime
apiSurface: source-clr
sourceFingerprint: f81d27a6090ff304ca3c3a5a5cb8fe7ca5956ffb4e61ffbcc4bf3090a9036df1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `capacity`:** Combined emitter and listener budget available to the update.

**Parameter `acceptedSnapshots`:** Snapshots accepted from fully validated provider contributions.

**Parameter `rejectedProviders`:** Provider contributions discarded because submission, validation, or capacity admission failed.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** A count is negative or accepted snapshots exceed capacity.
