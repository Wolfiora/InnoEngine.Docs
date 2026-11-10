---
title: Inno.Adapter.Audio
description: Explicit audio backend selection and composition-owned provider catalogs.
uid: project.inno-adapter-audio
kind: project
owners:
  - Inno.Adapter.Audio
---
# Inno.Adapter.Audio

This project selects backend-neutral audio devices from explicit provider registrations. It has no native bindings and does not define music, dialogue or scene-component policy.

## Select a backend

Host composition supplies `AudioBackendProvider` instances to an immutable `AudioBackendCatalog`. `AudioBackendId` is an open, ordinal identity; it must be assigned and contain no whitespace. The built-in MiniAudio identity names a registration, not a request to scan the process for an implementation.

Validate the product's adapter selection before creating services. `CreateDevice` receives a selected backend and `AudioBackendOptions`. The `noDevice` option supports explicitly hardwareless operation and tests; it is not evidence that a physical output device worked.

## Provider ownership contract

The composition owner retains providers and their resources. A successfully returned device belongs to the caller, which must transfer it to a runtime or dispose it under the device's lifetime contract. Building a catalog does not create devices or transfer provider ownership.

Null provider sequences, null entries, invalid IDs and duplicate registrations are rejected. An unregistered backend throws `NotSupportedException`; a provider returning no device throws `InvalidOperationException`. Selection failures are explicit rather than silently choosing another backend.

The concrete native integration stays in its backend project. Game scripts use the [audio facade](inno-audio.md), not backend factories or native handles. See [runtime composition](inno-audio-runtime.md) and [device replacement ownership](../../architecture/audio-lifetime.md#device-replacement-and-suspension).

## API reference

These are host composition contracts. Backend registration does not imply availability in every product or target.

[Browse audio adapter types](../types/adapter-audio/index.md).
