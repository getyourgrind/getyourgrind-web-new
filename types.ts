
import React from 'react';

export interface LaunchNotifyParams {
  email: string;
}

export interface EcosystemItem {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}
