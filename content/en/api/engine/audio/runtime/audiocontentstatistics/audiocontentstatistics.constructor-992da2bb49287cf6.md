---
uid: api.992da2bb49287cf677ac100ec89b1f713f338092928d6ad343fef4ff71149130
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioContentStatistics.#ctor(System.Int32,System.Int32,System.Int32)"
source: xml
reviewed: 1b7dcea869894a5acb0f6b63f2b7d8307cb5476c27532928bf29e71b86620faa
title: "AudioContentStatistics.Constructor"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Creates a content admission snapshot without retaining providers or host content.

**Parameter `capacity`:** Combined emitter and listener budget available to the update.

**Parameter `acceptedSnapshots`:** Snapshots accepted from fully validated provider contributions.

**Parameter `rejectedProviders`:** Provider contributions discarded because submission, validation, or capacity admission failed.

**Exception `T:System.ArgumentOutOfRangeException`:** A count is negative or accepted snapshots exceed capacity.
