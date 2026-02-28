const supabase = require('../config/supabase');

exports.getHabits = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('habits')
      .select('*')
      .eq('user_id', req.user.id)
      .order('created_at', { ascending: false });
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createHabit = async (req, res) => {
  try {
    const { name, category, difficulty, frequency } = req.body;
    const { data, error } = await supabase
      .from('habits')
      .insert([{ name, category, difficulty, frequency, user_id: req.user.id }])
      .select();
    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateHabit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, difficulty, frequency } = req.body;
    const { data, error } = await supabase
      .from('habits')
      .update({ name, category, difficulty, frequency })
      .eq('id', id)
      .eq('user_id', req.user.id)
      .select();
    if (error) return res.status(400).json({ error: error.message });
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteHabit = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('habits')
      .delete()
      .eq('id', id)
      .eq('user_id', req.user.id);
    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: 'Habit deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
