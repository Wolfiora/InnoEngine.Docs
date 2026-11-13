---
uid: api.c2fe51bb4ee44b464154aaffcc37da62e92a29be6f12b72a2c233d62e32d6e62
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioDeviceLimits.#ctor(System.Int32,System.Int32,System.Int32)"
source: xml
reviewed: 1b15a64cb0236b40412b9fc289c57a8e4c6e6becadbab70b51520a4932d53182
title: "Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Creates immutable positive capacities for one backend generation.

**Parameter `clips`:** Maximum simultaneously retained clip descriptors and native sources.

**Parameter `voices`:** Maximum active voices plus undelivered completions.

**Parameter `buses`:** Maximum simultaneously retained mixer buses.

**Exception `T:System.ArgumentOutOfRangeException`:** A capacity is not positive.
