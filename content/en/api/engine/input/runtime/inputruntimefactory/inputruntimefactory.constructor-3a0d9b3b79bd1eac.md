---
uid: api.3a0d9b3b79bd1eacf9f649a139895e3d04c05ddcadf07448a3f1929aa5d71199
symbol: "engine:Inno.Input.Runtime:M:Inno.Input.Runtime.InputRuntimeFactory.#ctor(System.Func{Inno.Runtime.Contracts.RuntimeSubsystemContext,Inno.Input.IInputBackend})"
source: xml
reviewed: ec126b6b1ec45e07a2cef391e9435d240af2495bdcf7c89c985886321747bdf8
title: "InputRuntimeFactory.Constructor"
kind: api
owners: [Inno.Input.Runtime]
apiSurface: source-clr
---

Creates a reusable factory that obtains an exclusively owned backend for each session.

## Parameters

**Parameter `backendFactory`:** The composition callback that creates a distinct backend for the supplied session context.
