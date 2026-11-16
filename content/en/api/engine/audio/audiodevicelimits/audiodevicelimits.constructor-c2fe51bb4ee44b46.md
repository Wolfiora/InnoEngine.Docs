---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c2fe51bb4ee44b464154aaffcc37da62e92a29be6f12b72a2c233d62e32d6e62
symbol: engine:Inno.Audio:M:Inno.Audio.AudioDeviceLimits.#ctor(System.Int32,System.Int32,System.Int32)
title: AudioDeviceLimits.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 3e0d816cb219a372fb3517840ff838be5048e5e91a33bb81b0f0eb19af50a92b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `clips`:** Maximum simultaneously retained clip descriptors and native sources.

**Parameter `voices`:** Maximum active voices plus undelivered completions.

**Parameter `buses`:** Maximum simultaneously retained mixer buses.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** A capacity is not positive.
