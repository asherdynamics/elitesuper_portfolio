import React from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFirePreset } from "tsparticles-preset-fire";

export class ParticlesContainer extends  React.Component{
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadFirePreset(engine);
  }

  render() {
    const options = {
      preset: "fire",
      fpsLimit: 500,
    };

    return <Particles options={options} init={this.customInit} />;
  }
}