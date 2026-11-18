---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7ba11b33669369b58739f7c874228f1585f03afb7e28429c5aa8e3b296d2f9c8
symbol: engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptCompilationStageTiming.#ctor(System.String,System.TimeSpan)
title: ScriptCompilationStageTiming.Constructor
kind: api
owners:
- Inno.Scripting.Compiler
apiSurface: source-clr
sourceFingerprint: c905a9a90efc506d9f4105131df3872ccf430cde0a9cee169da7434f0fca513b
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
