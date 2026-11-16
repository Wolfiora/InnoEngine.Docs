---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.992da2bb49287cf677ac100ec89b1f713f338092928d6ad343fef4ff71149130
symbol: engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioContentStatistics.#ctor(System.Int32,System.Int32,System.Int32)
title: AudioContentStatistics.Constructor
kind: api
owners:
- Inno.Audio.Runtime
apiSurface: source-clr
reviewed: 08b998b52a8f1f3b97d84ff24d2933d174d06c51bcf85147258497e5c0938b04
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
