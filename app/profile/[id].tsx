import ProfileHeader from '@/components/header/ProfileHeader';
import ProfileDetail from '@/features/profile/ui/Profile';
import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

export default function SoldierIdScreen() {
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <ProfileHeader />
      <ProfileDetail id={params.id} />
    </View>
  );
}
