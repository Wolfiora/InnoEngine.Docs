---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7ba11b33669369b58739f7c874228f1585f03afb7e28429c5aa8e3b296d2f9c8
symbol: engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptCompilationStageTiming.#ctor(System.String,System.TimeSpan)
title: ScriptCompilationStageTiming.Constructor
kind: api
owners:
- Inno.Scripting.Compiler
apiSurface: source-clr
reviewed: 59ed485266bca5ae24e73cbd6c943314e328916a2fada1c0073a23f4e0a18832
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `stage`:** The human-readable stage description.

**Parameter `elapsed`:** The wall time spent in the stage.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `stage` is empty or contains only whitespace.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `elapsed` is negative.
